"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HopFacet__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "bridge",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint64",
                name: "chainId",
                type: "uint64",
            },
        ],
        name: "Inited",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "transactionId",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "address",
                name: "receivingAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "FenixTransferCompleted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "transactionId",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "string",
                name: "integrator",
                type: "string",
            },
            {
                indexed: false,
                internalType: "address",
                name: "referrer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sendingAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "receivingAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "destinationChainId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "FenixTransferConfirmed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "transactionId",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "string",
                name: "integrator",
                type: "string",
            },
            {
                indexed: false,
                internalType: "address",
                name: "referrer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sendingAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "receivingAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "destinationChainId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "FenixTransferRefunded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "transactionId",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "string",
                name: "integrator",
                type: "string",
            },
            {
                indexed: false,
                internalType: "address",
                name: "referrer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sendingAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "receivingAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "destinationChainId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "FenixTransferStarted",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "string[]",
                name: "_tokens",
                type: "string[]",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "bridge",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "ammWrapper",
                        type: "address",
                    },
                ],
                internalType: "struct IHopBridge.BridgeConfig[]",
                name: "_bridgeConfigs",
                type: "tuple[]",
            },
            {
                internalType: "uint256",
                name: "_chainId",
                type: "uint256",
            },
        ],
        name: "initHop",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "bytes32",
                        name: "transactionId",
                        type: "bytes32",
                    },
                    {
                        internalType: "string",
                        name: "integrator",
                        type: "string",
                    },
                    {
                        internalType: "address",
                        name: "referrer",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "sendingAssetId",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "receivingAssetId",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "receiver",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "destinationChainId",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                ],
                internalType: "struct IFenix.FenixData",
                name: "_fenixData",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "string",
                        name: "asset",
                        type: "string",
                    },
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "chainId",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "bonderFee",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "amountOutMin",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "destinationAmountOutMin",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "destinationDeadline",
                        type: "uint256",
                    },
                ],
                internalType: "struct HopFacet.HopData",
                name: "_hopData",
                type: "tuple",
            },
        ],
        name: "startBridgeTokensViaHop",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "bytes32",
                        name: "transactionId",
                        type: "bytes32",
                    },
                    {
                        internalType: "string",
                        name: "integrator",
                        type: "string",
                    },
                    {
                        internalType: "address",
                        name: "referrer",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "sendingAssetId",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "receivingAssetId",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "receiver",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "destinationChainId",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                ],
                internalType: "struct IFenix.FenixData",
                name: "_fenixData",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "callTo",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "approveTo",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "sendingAssetId",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "receivingAssetId",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "fromAmount",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes",
                    },
                ],
                internalType: "struct LibSwap.SwapData[]",
                name: "_swapData",
                type: "tuple[]",
            },
            {
                components: [
                    {
                        internalType: "string",
                        name: "asset",
                        type: "string",
                    },
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "chainId",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "bonderFee",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "amountOutMin",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "destinationAmountOutMin",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "destinationDeadline",
                        type: "uint256",
                    },
                ],
                internalType: "struct HopFacet.HopData",
                name: "_hopData",
                type: "tuple",
            },
        ],
        name: "swapAndStartBridgeTokensViaHop",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b506118a2806100206000396000f3fe6080604052600436106100345760003560e01c80632722a4a814610039578063327a564d1461004e578063d1026c9c14610061575b600080fd5b61004c610047366004611482565b610081565b005b61004c61005c366004611541565b610205565b34801561006d57600080fd5b5061004c61007c366004611306565b610304565b60006100ca6100908380611681565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506103fd92505050565b51905060006100d88261048d565b905060005b60ff811685111561012c57865161011a90878760ff851681811061010357610103611840565b905060200281019061011591906116cf565b610522565b806101248161180a565b9150506100dd565b5082606001358161013c8461048d565b61014691906117c7565b101561018e5760405162461bcd60e51b815260206004820152601260248201527111549497d253959053125117d05353d5539560721b60448201526064015b60405180910390fd5b61019783610724565b85600001517f3b254a352757de129783dc1fcdea65d20e49fc091f974551e1dcb4afbf1fdc468760200151886040015189606001518a608001518b60a001518c60e001518d60c00151426040516101f5989796959493929190611629565b60405180910390a2505050505050565b60006102146100908380611681565b51905060006102228261048d565b90506102348233308660600135610993565b8260600135816102438461048d565b61024d91906117c7565b1461028f5760405162461bcd60e51b815260206004820152601260248201527111549497d253959053125117d05353d5539560721b6044820152606401610185565b61029883610724565b83600001517f3b254a352757de129783dc1fcdea65d20e49fc091f974551e1dcb4afbf1fdc4685602001518660400151876060015188608001518960a001518a60e001518b60c00151426040516102f6989796959493929190611629565b60405180910390a250505050565b7f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b861032d61099f565b60005b84518160ff1610156103f457838160ff168151811061035157610351611840565b602002602001015182600001868360ff168151811061037257610372611840565b602002602001015160405161038791906115fa565b9081526040805160209281900383019020835181546001600160a01b03199081166001600160a01b039283161783559385015160018301805486169183169190911790559390910151600290910180549092169216919091179055806103ec8161180a565b915050610330565b50600101555050565b604080516060810182526000808252602082018190528183015290517f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b89081906104489085906115fa565b90815260408051918290036020908101832060608401835280546001600160a01b03908116855260018201548116928501929092526002015416908201529392505050565b60006001600160a01b0382161561051a576040516370a0823160e01b81523060048201526001600160a01b038316906370a082319060240160206040518083038186803b1580156104dd57600080fd5b505afa1580156104f1573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051591906115a5565b61051c565b475b92915050565b608081018035906000906105429061053d90606086016112eb565b61048d565b9050600061055660608501604086016112eb565b90506001600160a01b038116151580156105775750826105758261048d565b105b156105975761059761058f60608601604087016112eb565b333086610993565b6001600160a01b038116156105c0576105c0816105ba60408701602088016112eb565b85610a28565b6000806105d060208701876112eb565b6001600160a01b0316346105e760a0890189611681565b6040516105f59291906115ea565b60006040518083038185875af1925050503d8060008114610632576040519150601f19603f3d011682016040523d82523d6000602084013e610637565b606091505b50915091508161066857600061064c82610add565b90508060405162461bcd60e51b81526004016101859190611616565b8361067c61053d6080890160608a016112eb565b61068691906117c7565b93507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38876106b760208901896112eb565b6106c760608a0160408b016112eb565b6106d760808b0160608c016112eb565b604080519485526001600160a01b0393841660208601529183168483015290911660608301526080820188905260a082018790524260c0830152519081900360e00190a150505050505050565b7f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b860006107546100908480611681565b6000015190506000826001015460011415610781576107766100908580611681565b602001519050610795565b61078e6100908580611681565b6040015190505b8360400135836001015414156107f85760405162461bcd60e51b815260206004820152602260248201527f43616e6e6f742062726964676520746f207468652073616d65206e6574776f72604482015261359760f11b6064820152608401610185565b61080782828660600135610a28565b8260010154600114156108ca576001600160a01b03811663deace8f56040860180359061083790602089016112eb565b60405160e084811b6001600160e01b031916825260048201939093526001600160a01b03919091166024820152606088013560448201529087013560648201526101008701356084820152600060a4820181905260c482015260e401600060405180830381600087803b1580156108ad57600080fd5b505af11580156108c1573d6000803e3d6000fd5b5050505061098d565b6001600160a01b03811663eea0d7b2604086018035906108ed90602089016112eb565b60405160e084811b6001600160e01b031916825260048201939093526001600160a01b03919091166024820152606088013560448201526080880135606482015260a0880135608482015260c088013560a48201529087013560c482015261010087013560e482015261010401600060405180830381600087803b15801561097457600080fd5b505af1158015610988573d6000803e3d6000fd5b505050505b50505050565b61098d84848484610b5b565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c600401546001600160a01b03163314610a265760405162461bcd60e51b815260206004820152602260248201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60448201526132b960f11b6064820152608401610185565b565b6001600160a01b038316610a3b57505050565b604051636eb1769f60e11b81523060048201526001600160a01b0383811660248301526000919085169063dd62ed3e9060440160206040518083038186803b158015610a8657600080fd5b505afa158015610a9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610abe91906115a5565b90508015610ad257610ad284846000610bc6565b61098d848484610cef565b6060604482511015610b2257505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000610b3e6004808551610b3691906117c7565b859190610db0565b905080806020019051810190610b54919061140b565b9392505050565b6040516001600160a01b038085166024830152831660448201526064810182905261098d9085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610ebd565b801580610c4f5750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b158015610c1557600080fd5b505afa158015610c29573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c4d91906115a5565b155b610cba5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b6064820152608401610185565b6040516001600160a01b038316602482015260448101829052610cea90849063095ea7b360e01b90606401610b8f565b505050565b604051636eb1769f60e11b81523060048201526001600160a01b038381166024830152600091839186169063dd62ed3e9060440160206040518083038186803b158015610d3b57600080fd5b505afa158015610d4f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d7391906115a5565b610d7d91906117af565b6040516001600160a01b03851660248201526044810182905290915061098d90859063095ea7b360e01b90606401610b8f565b606081610dbe81601f6117af565b1015610dfd5760405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b6044820152606401610185565b610e0782846117af565b84511015610e4b5760405162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b6044820152606401610185565b606082158015610e6a5760405191506000825260208201604052610eb4565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015610ea3578051835260209283019201610e8b565b5050858452601f01601f1916604052505b50949350505050565b6000610f12826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610f8f9092919063ffffffff16565b805190915015610cea5780806020019051810190610f3091906113e9565b610cea5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610185565b6060610f9e8484600085610fa6565b949350505050565b6060824710156110075760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610185565b843b6110555760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610185565b600080866001600160a01b0316858760405161107191906115fa565b60006040518083038185875af1925050503d80600081146110ae576040519150601f19603f3d011682016040523d82523d6000602084013e6110b3565b606091505b50915091506110c38282866110ce565b979650505050505050565b606083156110dd575081610b54565b8251156110ed5782518084602001fd5b8160405162461bcd60e51b81526004016101859190611616565b80356001600160a01b038116811461111e57600080fd5b919050565b600082601f83011261113457600080fd5b8135602061114961114483611763565b611732565b8281528181019085830160608086028801850189101561116857600080fd5b6000805b878110156111c75782848c031215611182578182fd5b61118a6116e5565b61119385611107565b81526111a0888601611107565b8882015260406111b1818701611107565b908201528652948601949282019260010161116c565b50929998505050505050505050565b600082601f8301126111e757600080fd5b81356111f561114482611787565b81815284602083860101111561120a57600080fd5b816020850160208301376000918101602001919091529392505050565b6000610120828403121561123a57600080fd5b50919050565b6000610100828403121561125357600080fd5b61125b61170e565b905081358152602082013567ffffffffffffffff81111561127b57600080fd5b611287848285016111d6565b60208301525061129960408301611107565b60408201526112aa60608301611107565b60608201526112bb60808301611107565b60808201526112cc60a08301611107565b60a082015260c082013560c082015260e082013560e082015292915050565b6000602082840312156112fd57600080fd5b610b5482611107565b60008060006060848603121561131b57600080fd5b833567ffffffffffffffff8082111561133357600080fd5b818601915086601f83011261134757600080fd5b8135602061135761114483611763565b8083825282820191508286018b848660051b890101111561137757600080fd5b60005b858110156113b25781358781111561139157600080fd5b61139f8e87838c01016111d6565b855250928401929084019060010161137a565b509098505050870135925050808211156113cb57600080fd5b506113d886828701611123565b925050604084013590509250925092565b6000602082840312156113fb57600080fd5b81518015158114610b5457600080fd5b60006020828403121561141d57600080fd5b815167ffffffffffffffff81111561143457600080fd5b8201601f8101841361144557600080fd5b805161145361114482611787565b81815285602083850101111561146857600080fd5b6114798260208301602086016117de565b95945050505050565b6000806000806060858703121561149857600080fd5b843567ffffffffffffffff808211156114b057600080fd5b6114bc88838901611240565b955060208701359150808211156114d257600080fd5b818701915087601f8301126114e657600080fd5b8135818111156114f557600080fd5b8860208260051b850101111561150a57600080fd5b60208301955080945050604087013591508082111561152857600080fd5b5061153587828801611227565b91505092959194509250565b6000806040838503121561155457600080fd5b823567ffffffffffffffff8082111561156c57600080fd5b61157886838701611240565b9350602085013591508082111561158e57600080fd5b5061159b85828601611227565b9150509250929050565b6000602082840312156115b757600080fd5b5051919050565b600081518084526115d68160208601602086016117de565b601f01601f19169290920160200192915050565b8183823760009101908152919050565b6000825161160c8184602087016117de565b9190910192915050565b602081526000610b5460208301846115be565b600061010080835261163d8184018c6115be565b6001600160a01b039a8b166020850152988a1660408401525050948716606086015292909516608084015260a083015260c082019390935260e00191909152919050565b6000808335601e1984360301811261169857600080fd5b83018035915067ffffffffffffffff8211156116b357600080fd5b6020019150368190038213156116c857600080fd5b9250929050565b6000823560be1983360301811261160c57600080fd5b6040516060810167ffffffffffffffff8111828210171561170857611708611856565b60405290565b604051610100810167ffffffffffffffff8111828210171561170857611708611856565b604051601f8201601f1916810167ffffffffffffffff8111828210171561175b5761175b611856565b604052919050565b600067ffffffffffffffff82111561177d5761177d611856565b5060051b60200190565b600067ffffffffffffffff8211156117a1576117a1611856565b50601f01601f191660200190565b600082198211156117c2576117c261182a565b500190565b6000828210156117d9576117d961182a565b500390565b60005b838110156117f95781810151838201526020016117e1565b8381111561098d5750506000910152565b600060ff821660ff8114156118215761182161182a565b60010192915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea264697066735822122069b82b3da669429934726d36d5c6ce8e91246e65177e2edc0b0619c44e90f2d064736f6c63430008070033";
var HopFacet__factory = /** @class */ (function (_super) {
    __extends(HopFacet__factory, _super);
    function HopFacet__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (args.length === 1) {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        else {
            _this = _super.apply(this, args) || this;
        }
        return _this;
    }
    HopFacet__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    HopFacet__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    HopFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    HopFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    HopFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    HopFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    HopFacet__factory.bytecode = _bytecode;
    HopFacet__factory.abi = _abi;
    return HopFacet__factory;
}(ethers_1.ContractFactory));
exports.HopFacet__factory = HopFacet__factory;
