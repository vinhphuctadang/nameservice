package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
	"github.com/vinhphuctadang/nameservice/testutil/sample"
)

func TestMsgCreateName_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateName
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateName{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateName{
				Creator: sample.AccAddress(),
				Name:    "hello",
				Price:   "1000",
				ForSale: "true",
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
