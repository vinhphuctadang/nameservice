package types

import (
	"math/big"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgChangeSaleStatus = "change_sale_status"

var _ sdk.Msg = &MsgChangeSaleStatus{}

func NewMsgChangeSaleStatus(creator string, name string, price string, forSale string) *MsgChangeSaleStatus {
	return &MsgChangeSaleStatus{
		Creator: creator,
		Name:    name,
		Price:   price,
		ForSale: forSale,
	}
}

func (msg *MsgChangeSaleStatus) Route() string {
	return RouterKey
}

func (msg *MsgChangeSaleStatus) Type() string {
	return TypeMsgChangeSaleStatus
}

func (msg *MsgChangeSaleStatus) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgChangeSaleStatus) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgChangeSaleStatus) ValidateBasic() error {
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

	return nil
}
