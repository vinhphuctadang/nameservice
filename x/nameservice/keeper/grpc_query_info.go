package keeper

import (
	"context"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/vinhphuctadang/nameservice/x/nameservice/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Info(goCtx context.Context, req *types.QueryInfoRequest) (*types.QueryInfoResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	nameMeta, err := k.getNameMeta(ctx, req.Name)
	if err != nil {
		if err == errNotFound {
			return &types.QueryInfoResponse{}, nil
		}
		return nil, err
	}

	return &types.QueryInfoResponse{
		Owner:   nameMeta.Owner,
		Price:   nameMeta.Price.String(),
		ForSale: strconv.FormatBool(nameMeta.ForSale),
	}, nil
}
