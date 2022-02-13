/* eslint-disable */
import { Coin } from "../cosmos/base/v1beta1/coin";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "vinhphuctadang.nameservice.nameservice";
const baseName = { owner: "", forSale: false };
export const Name = {
    encode(message, writer = Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.forSale === true) {
            writer.uint32(16).bool(message.forSale);
        }
        if (message.price !== undefined) {
            Coin.encode(message.price, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseName };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.forSale = reader.bool();
                    break;
                case 3:
                    message.price = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseName };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.forSale !== undefined && object.forSale !== null) {
            message.forSale = Boolean(object.forSale);
        }
        else {
            message.forSale = false;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = Coin.fromJSON(object.price);
        }
        else {
            message.price = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.forSale !== undefined && (obj.forSale = message.forSale);
        message.price !== undefined &&
            (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseName };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.forSale !== undefined && object.forSale !== null) {
            message.forSale = object.forSale;
        }
        else {
            message.forSale = false;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = Coin.fromPartial(object.price);
        }
        else {
            message.price = undefined;
        }
        return message;
    },
};
