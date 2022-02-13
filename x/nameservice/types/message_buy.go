package types

import (
	"math/big"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgBuy = "buy"

var _ sdk.Msg = &MsgBuy{}

func NewMsgBuy(creator string, name string, price string) *MsgBuy {
	return &MsgBuy{
		Creator: creator,
		Name:    name,
		Price:   price,
	}
}

func (msg *MsgBuy) Route() string {
	return RouterKey
}

func (msg *MsgBuy) Type() string {
	return TypeMsgBuy
}

func (msg *MsgBuy) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgBuy) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBuy) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	num, ok := new(big.Int).SetString(msg.Price, 10)
	if !ok || !num.IsUint64() {
		return sdkerrors.New("invalid_number", 1, "invalid bid price parsing")
	}

	return nil
}
