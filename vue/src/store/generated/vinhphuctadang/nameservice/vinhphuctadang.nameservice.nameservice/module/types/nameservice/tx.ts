/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "vinhphuctadang.nameservice.nameservice";

export interface MsgCreateName {
  creator: string;
  name: string;
  price: string;
  forSale: string;
}

export interface MsgCreateNameResponse {}

export interface MsgBuy {
  creator: string;
  name: string;
  price: string;
}

export interface MsgBuyResponse {}

export interface MsgChangeSaleStatus {
  creator: string;
  name: string;
  price: string;
  forSale: string;
}

export interface MsgChangeSaleStatusResponse {}

const baseMsgCreateName: object = {
  creator: "",
  name: "",
  price: "",
  forSale: "",
};

export const MsgCreateName = {
  encode(message: MsgCreateName, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.price !== "") {
      writer.uint32(26).string(message.price);
    }
    if (message.forSale !== "") {
      writer.uint32(34).string(message.forSale);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateName {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateName } as MsgCreateName;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.price = reader.string();
          break;
        case 4:
          message.forSale = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateName {
    const message = { ...baseMsgCreateName } as MsgCreateName;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = String(object.price);
    } else {
      message.price = "";
    }
    if (object.forSale !== undefined && object.forSale !== null) {
      message.forSale = String(object.forSale);
    } else {
      message.forSale = "";
    }
    return message;
  },

  toJSON(message: MsgCreateName): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.price !== undefined && (obj.price = message.price);
    message.forSale !== undefined && (obj.forSale = message.forSale);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateName>): MsgCreateName {
    const message = { ...baseMsgCreateName } as MsgCreateName;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = "";
    }
    if (object.forSale !== undefined && object.forSale !== null) {
      message.forSale = object.forSale;
    } else {
      message.forSale = "";
    }
    return message;
  },
};

const baseMsgCreateNameResponse: object = {};

export const MsgCreateNameResponse = {
  encode(_: MsgCreateNameResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateNameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateNameResponse } as MsgCreateNameResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateNameResponse {
    const message = { ...baseMsgCreateNameResponse } as MsgCreateNameResponse;
    return message;
  },

  toJSON(_: MsgCreateNameResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateNameResponse>): MsgCreateNameResponse {
    const message = { ...baseMsgCreateNameResponse } as MsgCreateNameResponse;
    return message;
  },
};

const baseMsgBuy: object = { creator: "", name: "", price: "" };

export const MsgBuy = {
  encode(message: MsgBuy, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.price !== "") {
      writer.uint32(26).string(message.price);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBuy } as MsgBuy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.price = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBuy {
    const message = { ...baseMsgBuy } as MsgBuy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = String(object.price);
    } else {
      message.price = "";
    }
    return message;
  },

  toJSON(message: MsgBuy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBuy>): MsgBuy {
    const message = { ...baseMsgBuy } as MsgBuy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = "";
    }
    return message;
  },
};

const baseMsgBuyResponse: object = {};

export const MsgBuyResponse = {
  encode(_: MsgBuyResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBuyResponse } as MsgBuyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBuyResponse {
    const message = { ...baseMsgBuyResponse } as MsgBuyResponse;
    return message;
  },

  toJSON(_: MsgBuyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgBuyResponse>): MsgBuyResponse {
    const message = { ...baseMsgBuyResponse } as MsgBuyResponse;
    return message;
  },
};

const baseMsgChangeSaleStatus: object = {
  creator: "",
  name: "",
  price: "",
  forSale: "",
};

export const MsgChangeSaleStatus = {
  encode(
    message: MsgChangeSaleStatus,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.price !== "") {
      writer.uint32(26).string(message.price);
    }
    if (message.forSale !== "") {
      writer.uint32(34).string(message.forSale);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgChangeSaleStatus {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChangeSaleStatus } as MsgChangeSaleStatus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.price = reader.string();
          break;
        case 4:
          message.forSale = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChangeSaleStatus {
    const message = { ...baseMsgChangeSaleStatus } as MsgChangeSaleStatus;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = String(object.price);
    } else {
      message.price = "";
    }
    if (object.forSale !== undefined && object.forSale !== null) {
      message.forSale = String(object.forSale);
    } else {
      message.forSale = "";
    }
    return message;
  },

  toJSON(message: MsgChangeSaleStatus): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.price !== undefined && (obj.price = message.price);
    message.forSale !== undefined && (obj.forSale = message.forSale);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgChangeSaleStatus>): MsgChangeSaleStatus {
    const message = { ...baseMsgChangeSaleStatus } as MsgChangeSaleStatus;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = "";
    }
    if (object.forSale !== undefined && object.forSale !== null) {
      message.forSale = object.forSale;
    } else {
      message.forSale = "";
    }
    return message;
  },
};

const baseMsgChangeSaleStatusResponse: object = {};

export const MsgChangeSaleStatusResponse = {
  encode(
    _: MsgChangeSaleStatusResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgChangeSaleStatusResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgChangeSaleStatusResponse,
    } as MsgChangeSaleStatusResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgChangeSaleStatusResponse {
    const message = {
      ...baseMsgChangeSaleStatusResponse,
    } as MsgChangeSaleStatusResponse;
    return message;
  },

  toJSON(_: MsgChangeSaleStatusResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgChangeSaleStatusResponse>
  ): MsgChangeSaleStatusResponse {
    const message = {
      ...baseMsgChangeSaleStatusResponse,
    } as MsgChangeSaleStatusResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateName(request: MsgCreateName): Promise<MsgCreateNameResponse>;
  Buy(request: MsgBuy): Promise<MsgBuyResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  ChangeSaleStatus(
    request: MsgChangeSaleStatus
  ): Promise<MsgChangeSaleStatusResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateName(request: MsgCreateName): Promise<MsgCreateNameResponse> {
    const data = MsgCreateName.encode(request).finish();
    const promise = this.rpc.request(
      "vinhphuctadang.nameservice.nameservice.Msg",
      "CreateName",
      data
    );
    return promise.then((data) =>
      MsgCreateNameResponse.decode(new Reader(data))
    );
  }

  Buy(request: MsgBuy): Promise<MsgBuyResponse> {
    const data = MsgBuy.encode(request).finish();
    const promise = this.rpc.request(
      "vinhphuctadang.nameservice.nameservice.Msg",
      "Buy",
      data
    );
    return promise.then((data) => MsgBuyResponse.decode(new Reader(data)));
  }

  ChangeSaleStatus(
    request: MsgChangeSaleStatus
  ): Promise<MsgChangeSaleStatusResponse> {
    const data = MsgChangeSaleStatus.encode(request).finish();
    const promise = this.rpc.request(
      "vinhphuctadang.nameservice.nameservice.Msg",
      "ChangeSaleStatus",
      data
    );
    return promise.then((data) =>
      MsgChangeSaleStatusResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
