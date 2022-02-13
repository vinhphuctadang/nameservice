package nameservice_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "github.com/vinhphuctadang/nameservice/testutil/keeper"
	"github.com/vinhphuctadang/nameservice/testutil/nullify"
	"github.com/vinhphuctadang/nameservice/x/nameservice"
	"github.com/vinhphuctadang/nameservice/x/nameservice/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.NameserviceKeeper(t)
	nameservice.InitGenesis(ctx, *k, genesisState)
	got := nameservice.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
