// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgChangeSaleStatus } from "./types/nameservice/tx";
import { MsgCreateName } from "./types/nameservice/tx";
import { MsgBuy } from "./types/nameservice/tx";


const types = [
  ["/vinhphuctadang.nameservice.nameservice.MsgChangeSaleStatus", MsgChangeSaleStatus],
  ["/vinhphuctadang.nameservice.nameservice.MsgCreateName", MsgCreateName],
  ["/vinhphuctadang.nameservice.nameservice.MsgBuy", MsgBuy],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgChangeSaleStatus: (data: MsgChangeSaleStatus): EncodeObject => ({ typeUrl: "/vinhphuctadang.nameservice.nameservice.MsgChangeSaleStatus", value: MsgChangeSaleStatus.fromPartial( data ) }),
    msgCreateName: (data: MsgCreateName): EncodeObject => ({ typeUrl: "/vinhphuctadang.nameservice.nameservice.MsgCreateName", value: MsgCreateName.fromPartial( data ) }),
    msgBuy: (data: MsgBuy): EncodeObject => ({ typeUrl: "/vinhphuctadang.nameservice.nameservice.MsgBuy", value: MsgBuy.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
