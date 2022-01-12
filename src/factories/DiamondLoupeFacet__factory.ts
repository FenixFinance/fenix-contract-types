/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DiamondLoupeFacet,
  DiamondLoupeFacetInterface,
} from "../DiamondLoupeFacet";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_functionSelector",
        type: "bytes4",
      },
    ],
    name: "facetAddress",
    outputs: [
      {
        internalType: "address",
        name: "facetAddress_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "facetAddresses",
    outputs: [
      {
        internalType: "address[]",
        name: "facetAddresses_",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_facet",
        type: "address",
      },
    ],
    name: "facetFunctionSelectors",
    outputs: [
      {
        internalType: "bytes4[]",
        name: "facetFunctionSelectors_",
        type: "bytes4[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "facets",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct IDiamondLoupe.Facet[]",
        name: "facets_",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610690806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806301ffc9a71461005c57806352ef6b2c146100bd5780637a0ed627146100d2578063adfca15e146100e7578063cdffacc614610107575b600080fd5b6100a861006a366004610499565b6001600160e01b03191660009081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131f602052604090205460ff1690565b60405190151581526020015b60405180910390f35b6100c561015f565b6040516100b49190610508565b6100da6101d2565b6040516100b49190610568565b6100fa6100f5366004610469565b61039d565b6040516100b49190610555565b610147610115366004610499565b6001600160e01b031916600090815260008051602061063b83398151915260205260409020546001600160a01b031690565b6040516001600160a01b0390911681526020016100b4565b6060600060008051602061063b833981519152600281018054604080516020808402820181019092528281529394508301828280156101c757602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116101a9575b505050505091505090565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131e5460609060008051602061063b833981519152908067ffffffffffffffff81111561022057610220610624565b60405190808252806020026020018201604052801561026657816020015b60408051808201909152600081526060602082015281526020019060019003908161023e5790505b50925060005b8181101561039757600083600201828154811061028b5761028b61060e565b9060005260206000200160009054906101000a90046001600160a01b03169050808583815181106102be576102be61060e565b6020908102919091018101516001600160a01b03928316905290821660009081526001860182526040908190208054825181850281018501909352808352919290919083018282801561035d57602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b0319168152602001906004019060208260030104928301926001038202915080841161031f5790505b50505050508583815181106103745761037461060e565b60200260200101516020018190525050808061038f906105e5565b91505061026c565b50505090565b6001600160a01b03811660009081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131d6020908152604091829020805483518184028101840190945280845260609360008051602061063b833981519152939092919083018282801561045c57602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b0319168152602001906004019060208260030104928301926001038202915080841161041e5790505b5050505050915050919050565b60006020828403121561047b57600080fd5b81356001600160a01b038116811461049257600080fd5b9392505050565b6000602082840312156104ab57600080fd5b81356001600160e01b03198116811461049257600080fd5b600081518084526020808501945080840160005b838110156104fd5781516001600160e01b031916875295820195908201906001016104d7565b509495945050505050565b6020808252825182820181905260009190848201906040850190845b818110156105495783516001600160a01b031683529284019291840191600101610524565b50909695505050505050565b60208152600061049260208301846104c3565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b838110156105d757888303603f19018552815180516001600160a01b031684528701518784018790526105c4878501826104c3565b958801959350509086019060010161058f565b509098975050505050505050565b600060001982141561060757634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfec8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131ca2646970667358221220bf9b2aea81ff2ede1e9ebc4ff7ee6d2c9d780517404d81f3a1586ca88190694464736f6c63430008070033";

export class DiamondLoupeFacet__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DiamondLoupeFacet> {
    return super.deploy(overrides || {}) as Promise<DiamondLoupeFacet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DiamondLoupeFacet {
    return super.attach(address) as DiamondLoupeFacet;
  }
  connect(signer: Signer): DiamondLoupeFacet__factory {
    return super.connect(signer) as DiamondLoupeFacet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DiamondLoupeFacetInterface {
    return new utils.Interface(_abi) as DiamondLoupeFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DiamondLoupeFacet {
    return new Contract(address, _abi, signerOrProvider) as DiamondLoupeFacet;
  }
}
