package keeper

import (
	"context"
	"errors"
	"fmt"
	"math/big"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/vinhphuctadang/nameservice/x/nameservice/types"
)

func (k msgServer) Buy(goCtx context.Context, msg *types.MsgBuy) (*types.MsgBuyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	nameMeta, err := k.getNameMeta(ctx, msg.Name)
	if err != nil {
		return nil, err
	}

	if err := validateBuy(msg, nameMeta); err != nil {
		return nil, err
	}

	owner, buyer, err := parseBuyParams(nameMeta.Owner, msg.Creator)
	if err != nil {
		return nil, err
	}

	// nameMeta.Coin won't be nil
	err = k.bank.SendCoins(ctx, buyer, owner, []sdk.Coin{*nameMeta.Price})
	if err != nil {
		return nil, err
	}

	nameMeta.Owner = msg.Creator
	nameMeta.ForSale = false
	if err := k.setNameMeta(ctx, msg.Name, nameMeta); err != nil {
		return nil, err
	}

	return &types.MsgBuyResponse{}, nil
}

func (k msgServer) getNameMeta(ctx sdk.Context, name string) (*types.Name, error) {
	store := ctx.KVStore(k.storeKey)
	nameMetaBytes := store.Get([]byte(name))

	if nameMetaBytes == nil {
		return nil, errNotFound
	}

	var nameMeta types.Name
	if err := k.cdc.Unmarshal(nameMetaBytes, &nameMeta); err != nil {
		return nil, fmt.Errorf("get name meta: %w", err)
	}

	return &nameMeta, nil
}

func (k msgServer) setNameMeta(ctx sdk.Context, name string, meta *types.Name) error {
	if meta == nil {
		return errors.New("nil meta")
	}

	var (
		key       = []byte(name)
		metaBytes = k.cdc.MustMarshal(meta)
		store     = ctx.KVStore(k.storeKey)
	)

	store.Set(key, metaBytes)

	return nil
}

func validateBuy(msg *types.MsgBuy, nameMeta *types.Name) error {
	if err := msg.ValidateBasic(); err != nil {
		return err
	}

	if !nameMeta.ForSale {
		return errors.New("name is not for sale")
	}

	bidPrice, _ := new(big.Int).SetString(msg.Price, 10)
	namePrice := nameMeta.Price.Amount

	if bidPrice.Cmp(namePrice.BigInt()) != 0 {
		// if bidPrice != name current price
		return errors.New("bid price is not equals to name current price")
	}

	return nil
}

func parseBuyParams(owner, buyer string) (sdk.AccAddress, sdk.AccAddress, error) {
	ownerAddr, err := sdk.AccAddressFromBech32(owner)
	if err != nil {
		return nil, nil, err
	}

	buyerAddr, err := sdk.AccAddressFromBech32(buyer)
	if err != nil {
		return nil, nil, err
	}

	return ownerAddr, buyerAddr, nil
}
