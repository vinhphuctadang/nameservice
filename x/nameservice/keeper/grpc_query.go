package keeper

import (
	"github.com/vinhphuctadang/nameservice/x/nameservice/types"
)

var _ types.QueryServer = Keeper{}
