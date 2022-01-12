/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICBridge, ICBridgeInterface } from "../ICBridge";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_relayRequest",
        type: "bytes",
      },
      {
        internalType: "bytes[]",
        name: "_sigs",
        type: "bytes[]",
      },
      {
        internalType: "address[]",
        name: "_signers",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_powers",
        type: "uint256[]",
      },
    ],
    name: "relay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "_dstChinId",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "_nonce",
        type: "uint64",
      },
      {
        internalType: "uint32",
        name: "_maxSlippage",
        type: "uint32",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "_dstChinId",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "_nonce",
        type: "uint64",
      },
      {
        internalType: "uint32",
        name: "_maxSlippage",
        type: "uint32",
      },
    ],
    name: "sendNative",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ICBridge__factory {
  static readonly abi = _abi;
  static createInterface(): ICBridgeInterface {
    return new utils.Interface(_abi) as ICBridgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICBridge {
    return new Contract(address, _abi, signerOrProvider) as ICBridge;
  }
}
