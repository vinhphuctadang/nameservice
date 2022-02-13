// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgBuy } from "./types/nameservice/tx";
import { MsgChangeSaleStatus } from "./types/nameservice/tx";
import { MsgCreateName } from "./types/nameservice/tx";
const types = [
    ["/vinhphuctadang.nameservice.nameservice.MsgBuy", MsgBuy],
    ["/vinhphuctadang.nameservice.nameservice.MsgChangeSaleStatus", MsgChangeSaleStatus],
    ["/vinhphuctadang.nameservice.nameservice.MsgCreateName", MsgCreateName],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgBuy: (data) => ({ typeUrl: "/vinhphuctadang.nameservice.nameservice.MsgBuy", value: MsgBuy.fromPartial(data) }),
        msgChangeSaleStatus: (data) => ({ typeUrl: "/vinhphuctadang.nameservice.nameservice.MsgChangeSaleStatus", value: MsgChangeSaleStatus.fromPartial(data) }),
        msgCreateName: (data) => ({ typeUrl: "/vinhphuctadang.nameservice.nameservice.MsgCreateName", value: MsgCreateName.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
