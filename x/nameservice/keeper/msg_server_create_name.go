package keeper

import (
	"context"
	"errors"
	"math/big"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/vinhphuctadang/nameservice/x/nameservice/types"
)

func (k msgServer) CreateName(goCtx context.Context, msg *types.MsgCreateName) (*types.MsgCreateNameResponse, error) {
	if err := msg.ValidateBasic(); err != nil {
		return nil, err
	}

	var (
		ctx     = sdk.UnwrapSDKContext(goCtx)
		name    = msg.Name
		price   = msg.Price
		forSale = msg.ForSale
	)

	store := ctx.KVStore(k.storeKey)
	meta, err := k.getNameMeta(ctx, name)
	if err != nil && err != errNotFound {
		return nil, err
	}

	if meta != nil && len(meta.Owner) > 0 {
		return nil, errors.New("name is owned by someone")
	}

	// must parsable, validate basic has checked this
	num, _ := new(big.Int).SetString(price, 10)
	priceInCoin := sdk.NewCoin("token", sdk.NewIntFromBigInt(num))
	forSaleBool, _ := strconv.ParseBool(forSale)

	key := []byte(name)
	nameMeta := &types.Name{
		Owner:   msg.Creator,
		Price:   &priceInCoin,
		ForSale: forSaleBool,
	}

	nameMetaBytes := k.cdc.MustMarshal(nameMeta)
	store.Set(key, nameMetaBytes)

	return &types.MsgCreateNameResponse{}, nil
}
