package keeper

import (
	"context"
	"errors"
	"math/big"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/vinhphuctadang/nameservice/x/nameservice/types"
)

func (k msgServer) ChangeSaleStatus(goCtx context.Context, msg *types.MsgChangeSaleStatus) (*types.MsgChangeSaleStatusResponse, error) {
	if err := msg.ValidateBasic(); err != nil {
		return nil, err
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	meta, err := k.getNameMeta(ctx, msg.Name)
	if err != nil {
		return nil, err
	}

	if meta.Owner != msg.Creator {
		return nil, errors.New("only owner can set price")
	}

	var (
		// called ValidateBasic, which ensures values to be parsable
		price, _    = new(big.Int).SetString(msg.Price, 10)
		forSale, _  = strconv.ParseBool(msg.ForSale)
		priceInCoin = sdk.NewCoin("token", sdk.NewIntFromBigInt(price))
	)

	meta.Price = &priceInCoin
	meta.ForSale = forSale
	if err := k.setNameMeta(ctx, msg.Name, meta); err != nil {
		return nil, err
	}

	return &types.MsgChangeSaleStatusResponse{}, nil
}
