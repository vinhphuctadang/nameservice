package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"github.com/vinhphuctadang/nameservice/x/nameservice/types"
)

var _ = strconv.Itoa(0)

func CmdChangeSaleStatus() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "change-sale-status [name] [price] [for-sale]",
		Short: "Broadcast message changeSaleStatus",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argName := args[0]
			argPrice := args[1]
			argForSale := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgChangeSaleStatus(
				clientCtx.GetFromAddress().String(),
				argName,
				argPrice,
				argForSale,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
