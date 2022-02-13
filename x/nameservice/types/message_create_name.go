package types

import (
	"math/big"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateName = "create_name"

var _ sdk.Msg = &MsgCreateName{}

func NewMsgCreateName(creator string, name string, price string, forSale string) *MsgCreateName {
	return &MsgCreateName{
		Creator: creator,
		Name:    name,
		Price:   price,
		ForSale: forSale,
	}
}

func (msg *MsgCreateName) Route() string {
	return RouterKey
}

func (msg *MsgCreateName) Type() string {
	return TypeMsgCreateName
}

func (msg *MsgCreateName) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateName) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateName) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	_, err = strconv.ParseBool(msg.ForSale)
	if err != nil {
		return sdkerrors.Wrapf(err, "invalid bool value")
	}

	num, ok := new(big.Int).SetString(msg.Price, 10)
	if !ok || !num.IsUint64() {
		return sdkerrors.New("invalid_price", 1, "invalid price error")
	}

	if len(msg.Name) == 0 {
		return sdkerrors.New("invalid_name", 1, "name cannot be empty")
	}

	return nil
}
