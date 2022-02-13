import { Coin } from "../cosmos/base/v1beta1/coin";
import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "vinhphuctadang.nameservice.nameservice";
/** Params defines the parameters for the module. */
export interface Name {
    owner: string;
    forSale: boolean;
    price: Coin | undefined;
}
export declare const Name: {
    encode(message: Name, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Name;
    fromJSON(object: any): Name;
    toJSON(message: Name): unknown;
    fromPartial(object: DeepPartial<Name>): Name;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
