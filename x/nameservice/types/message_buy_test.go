package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
	"github.com/vinhphuctadang/nameservice/testutil/sample"
)

func TestMsgBuy_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgBuy
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgBuy{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgBuy{
				Creator: sample.AccAddress(),
				Price:   "1000",
				Name:    "hello",
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
