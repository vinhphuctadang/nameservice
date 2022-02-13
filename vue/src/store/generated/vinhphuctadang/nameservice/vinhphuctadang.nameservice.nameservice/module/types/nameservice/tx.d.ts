import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "vinhphuctadang.nameservice.nameservice";
export interface MsgCreateName {
    creator: string;
    name: string;
    price: string;
    forSale: string;
}
export interface MsgCreateNameResponse {
}
export interface MsgBuy {
    creator: string;
    name: string;
    price: string;
}
export interface MsgBuyResponse {
}
export interface MsgChangeSaleStatus {
    creator: string;
    name: string;
    price: string;
    forSale: string;
}
export interface MsgChangeSaleStatusResponse {
}
export declare const MsgCreateName: {
    encode(message: MsgCreateName, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateName;
    fromJSON(object: any): MsgCreateName;
    toJSON(message: MsgCreateName): unknown;
    fromPartial(object: DeepPartial<MsgCreateName>): MsgCreateName;
};
export declare const MsgCreateNameResponse: {
    encode(_: MsgCreateNameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateNameResponse;
    fromJSON(_: any): MsgCreateNameResponse;
    toJSON(_: MsgCreateNameResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateNameResponse>): MsgCreateNameResponse;
};
export declare const MsgBuy: {
    encode(message: MsgBuy, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBuy;
    fromJSON(object: any): MsgBuy;
    toJSON(message: MsgBuy): unknown;
    fromPartial(object: DeepPartial<MsgBuy>): MsgBuy;
};
export declare const MsgBuyResponse: {
    encode(_: MsgBuyResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBuyResponse;
    fromJSON(_: any): MsgBuyResponse;
    toJSON(_: MsgBuyResponse): unknown;
    fromPartial(_: DeepPartial<MsgBuyResponse>): MsgBuyResponse;
};
export declare const MsgChangeSaleStatus: {
    encode(message: MsgChangeSaleStatus, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgChangeSaleStatus;
    fromJSON(object: any): MsgChangeSaleStatus;
    toJSON(message: MsgChangeSaleStatus): unknown;
    fromPartial(object: DeepPartial<MsgChangeSaleStatus>): MsgChangeSaleStatus;
};
export declare const MsgChangeSaleStatusResponse: {
    encode(_: MsgChangeSaleStatusResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgChangeSaleStatusResponse;
    fromJSON(_: any): MsgChangeSaleStatusResponse;
    toJSON(_: MsgChangeSaleStatusResponse): unknown;
    fromPartial(_: DeepPartial<MsgChangeSaleStatusResponse>): MsgChangeSaleStatusResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateName(request: MsgCreateName): Promise<MsgCreateNameResponse>;
    Buy(request: MsgBuy): Promise<MsgBuyResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    ChangeSaleStatus(request: MsgChangeSaleStatus): Promise<MsgChangeSaleStatusResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateName(request: MsgCreateName): Promise<MsgCreateNameResponse>;
    Buy(request: MsgBuy): Promise<MsgBuyResponse>;
    ChangeSaleStatus(request: MsgChangeSaleStatus): Promise<MsgChangeSaleStatusResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
