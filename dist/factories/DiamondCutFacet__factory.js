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
exports.DiamondCutFacet__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "facetAddress",
                        type: "address",
                    },
                    {
                        internalType: "enum IDiamondCut.FacetCutAction",
                        name: "action",
                        type: "uint8",
                    },
                    {
                        internalType: "bytes4[]",
                        name: "functionSelectors",
                        type: "bytes4[]",
                    },
                ],
                indexed: false,
                internalType: "struct IDiamondCut.FacetCut[]",
                name: "_diamondCut",
                type: "tuple[]",
            },
            {
                indexed: false,
                internalType: "address",
                name: "_init",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "_calldata",
                type: "bytes",
            },
        ],
        name: "DiamondCut",
        type: "event",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "facetAddress",
                        type: "address",
                    },
                    {
                        internalType: "enum IDiamondCut.FacetCutAction",
                        name: "action",
                        type: "uint8",
                    },
                    {
                        internalType: "bytes4[]",
                        name: "functionSelectors",
                        type: "bytes4[]",
                    },
                ],
                internalType: "struct IDiamondCut.FacetCut[]",
                name: "_diamondCut",
                type: "tuple[]",
            },
            {
                internalType: "address",
                name: "_init",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "_calldata",
                type: "bytes",
            },
        ],
        name: "diamondCut",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b506114b2806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631f931c1c14610030575b600080fd5b61004361003e366004610eac565b610045565b005b61004d61009e565b61009761005a85876111ec565b8484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061011a92505050565b5050505050565b600080516020611411833981519152600401546001600160a01b031633146101185760405162461bcd60e51b815260206004820152602260248201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60448201526132b960f11b60648201526084015b60405180910390fd5b565b60005b83518110156102e357600084828151811061013a5761013a6113e4565b60200260200101516020015190506000600281111561015b5761015b6113b8565b81600281111561016d5761016d6113b8565b14156101bc576101b7858381518110610188576101886113e4565b6020026020010151600001518684815181106101a6576101a66113e4565b60200260200101516040015161032e565b6102d0565b60018160028111156101d0576101d06113b8565b141561021a576101b78583815181106101eb576101eb6113e4565b602002602001015160000151868481518110610209576102096113e4565b6020026020010151604001516104a3565b600281600281111561022e5761022e6113b8565b1415610278576101b7858381518110610249576102496113e4565b602002602001015160000151868481518110610267576102676113e4565b602002602001015160400151610631565b60405162461bcd60e51b815260206004820152602760248201527f4c69624469616d6f6e644375743a20496e636f727265637420466163657443756044820152663a20b1ba34b7b760c91b606482015260840161010f565b50806102db81611360565b91505061011d565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb67383838360405161031793929190610fa6565b60405180910390a1610329828261074f565b505050565b600081511161034f5760405162461bcd60e51b815260040161010f906110c0565b6000805160206114118339815191526001600160a01b0383166103845760405162461bcd60e51b815260040161010f9061110b565b6001600160a01b03831660009081526001820160205260409020546001600160601b0381166103b7576103b7828561095c565b60005b83518110156100975760008482815181106103d7576103d76113e4565b6020908102919091018101516001600160e01b031981166000908152918690526040909120549091506001600160a01b031680156104755760405162461bcd60e51b815260206004820152603560248201527f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f6044820152746e207468617420616c72656164792065786973747360581b606482015260840161010f565b6104818583868a6109c6565b8361048b8161137b565b9450505050808061049b90611360565b9150506103ba565b60008151116104c45760405162461bcd60e51b815260040161010f906110c0565b6000805160206114118339815191526001600160a01b0383166104f95760405162461bcd60e51b815260040161010f9061110b565b6001600160a01b03831660009081526001820160205260409020546001600160601b03811661052c5761052c828561095c565b60005b835181101561009757600084828151811061054c5761054c6113e4565b6020908102919091018101516001600160e01b031981166000908152918690526040909120549091506001600160a01b039081169087168114156105f85760405162461bcd60e51b815260206004820152603860248201527f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60448201527f6374696f6e20776974682073616d652066756e6374696f6e0000000000000000606482015260840161010f565b610603858284610a66565b61060f8583868a6109c6565b836106198161137b565b9450505050808061062990611360565b91505061052f565b60008151116106525760405162461bcd60e51b815260040161010f906110c0565b6000805160206114118339815191526001600160a01b038316156106d75760405162461bcd60e51b815260206004820152603660248201527f4c69624469616d6f6e644375743a2052656d6f76652066616365742061646472604482015275657373206d757374206265206164647265737328302960501b606482015260840161010f565b60005b82518110156107495760008382815181106106f7576106f76113e4565b6020908102919091018101516001600160e01b031981166000908152918590526040909120549091506001600160a01b0316610734848284610a66565b5050808061074190611360565b9150506106da565b50505050565b6001600160a01b0382166107d6578051156107d25760405162461bcd60e51b815260206004820152603c60248201527f4c69624469616d6f6e644375743a205f696e697420697320616464726573732860448201527f3029206275745f63616c6c64617461206973206e6f7420656d70747900000000606482015260840161010f565b5050565b600081511161084d5760405162461bcd60e51b815260206004820152603d60248201527f4c69624469616d6f6e644375743a205f63616c6c6461746120697320656d707460448201527f7920627574205f696e6974206973206e6f742061646472657373283029000000606482015260840161010f565b6001600160a01b038216301461087f5761087f8260405180606001604052806028815260200161143160289139610e26565b600080836001600160a01b03168360405161089a9190610f8a565b600060405180830381855af49150503d80600081146108d5576040519150601f19603f3d011682016040523d82523d6000602084013e6108da565b606091505b50915091508161074957805115610905578060405162461bcd60e51b815260040161010f91906110a6565b60405162461bcd60e51b815260206004820152602660248201527f4c69624469616d6f6e644375743a205f696e69742066756e6374696f6e2072656044820152651d995c9d195960d21b606482015260840161010f565b61097e8160405180606001604052806024815260200161145960249139610e26565b6002820180546001600160a01b0390921660008181526001948501602090815260408220860185905594840183559182529290200180546001600160a01b0319169091179055565b6001600160e01b0319831660008181526020868152604080832080546001600160601b03909716600160a01b026001600160a01b0397881617815594909516808352600180890183529583208054968701815583528183206008870401805460e09890981c60046007909816979097026101000a96870263ffffffff9097021990971695909517909555529290915281546001600160a01b031916179055565b6001600160a01b038216610ae25760405162461bcd60e51b815260206004820152603760248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360448201527f74696f6e207468617420646f65736e2774206578697374000000000000000000606482015260840161010f565b6001600160a01b038216301415610b525760405162461bcd60e51b815260206004820152602e60248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560448201526d3a30b1363290333ab731ba34b7b760911b606482015260840161010f565b6001600160e01b03198116600090815260208481526040808320546001600160a01b0386168452600180880190935290832054600160a01b9091046001600160601b03169291610ba1916111d5565b9050808214610c93576001600160a01b03841660009081526001860160205260408120805483908110610bd657610bd66113e4565b600091825260208083206008830401546001600160a01b038916845260018a019091526040909220805460079092166004026101000a90920460e01b925082919085908110610c2757610c276113e4565b600091825260208083206008830401805463ffffffff60079094166004026101000a938402191660e09590951c929092029390931790556001600160e01b03199290921682528690526040902080546001600160a01b0316600160a01b6001600160601b038516021790555b6001600160a01b03841660009081526001860160205260409020805480610cbc57610cbc6113ce565b60008281526020808220600860001990940193840401805463ffffffff600460078716026101000a0219169055919092556001600160e01b031985168252869052604081205580610097576002850154600090610d1b906001906111d5565b6001600160a01b0386166000908152600180890160205260409091200154909150808214610dca576000876002018381548110610d5a57610d5a6113e4565b6000918252602090912001546002890180546001600160a01b039092169250829184908110610d8b57610d8b6113e4565b600091825260208083209190910180546001600160a01b0319166001600160a01b03948516179055929091168152600189810190925260409020018190555b86600201805480610ddd57610ddd6113ce565b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b0388168252600189810190915260408220015550505050505050565b813b81816107495760405162461bcd60e51b815260040161010f91906110a6565b80356001600160a01b0381168114610e5e57600080fd5b919050565b60008083601f840112610e7557600080fd5b50813567ffffffffffffffff811115610e8d57600080fd5b602083019150836020828501011115610ea557600080fd5b9250929050565b600080600080600060608688031215610ec457600080fd5b853567ffffffffffffffff80821115610edc57600080fd5b818801915088601f830112610ef057600080fd5b813581811115610eff57600080fd5b8960208260051b8501011115610f1457600080fd5b60208301975080965050610f2a60208901610e47565b94506040880135915080821115610f4057600080fd5b50610f4d88828901610e63565b969995985093965092949392505050565b60008151808452610f76816020860160208601611334565b601f01601f19169290920160200192915050565b60008251610f9c818460208701611334565b9190910192915050565b60006060808301818452808751808352608092508286019150828160051b8701016020808b0160005b8481101561107657898403607f19018652815180516001600160a01b0316855283810151898601906003811061101557634e487b7160e01b600052602160045260246000fd5b868601526040918201519186018a905281519081905290840190600090898701905b808310156110615783516001600160e01b0319168252928601926001929092019190860190611037565b50978501979550505090820190600101610fcf565b50506001600160a01b038a169088015286810360408801526110988189610f5e565b9a9950505050505050505050565b6020815260006110b96020830184610f5e565b9392505050565b6020808252602b908201527f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660408201526a1858d95d081d1bc818dd5d60aa1b606082015260800190565b6020808252602c908201527f4c69624469616d6f6e644375743a204164642066616365742063616e2774206260408201526b65206164647265737328302960a01b606082015260800190565b6040516060810167ffffffffffffffff8111828210171561117a5761117a6113fa565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156111a9576111a96113fa565b604052919050565b600067ffffffffffffffff8211156111cb576111cb6113fa565b5060051b60200190565b6000828210156111e7576111e76113a2565b500390565b60006111ff6111fa846111b1565b611180565b838152602080820191908460053688821b8301111561121d57600080fd5b60005b8881101561132757823567ffffffffffffffff8082111561124057600080fd5b818a0191506060823603121561125557600080fd5b61125d611157565b61126683610e47565b8152868301356003811061127957600080fd5b818801526040838101358381111561129057600080fd5b939093019236601f8501126112a457600080fd5b833592506112b46111fa846111b1565b83815288810190858a0136868a1b88018c0111156112d157600080fd5b600096505b8587101561130a5780356001600160e01b0319811681146112f657600080fd5b835260019690960195918a01918a016112d6565b509183019190915250885250509483019491830191600101611220565b5092979650505050505050565b60005b8381101561134f578181015183820152602001611337565b838111156107495750506000910152565b6000600019821415611374576113746113a2565b5060010190565b60006001600160601b0380831681811415611398576113986113a2565b6001019392505050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfec8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c4c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a204e657720666163657420686173206e6f20636f6465a2646970667358221220cb3608f985e15fe1c810d3b025db6fcab323b52b076c5ed6b949dd3015c7d6a564736f6c63430008070033";
var DiamondCutFacet__factory = /** @class */ (function (_super) {
    __extends(DiamondCutFacet__factory, _super);
    function DiamondCutFacet__factory() {
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
    DiamondCutFacet__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    DiamondCutFacet__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    DiamondCutFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    DiamondCutFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    DiamondCutFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    DiamondCutFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    DiamondCutFacet__factory.bytecode = _bytecode;
    DiamondCutFacet__factory.abi = _abi;
    return DiamondCutFacet__factory;
}(ethers_1.ContractFactory));
exports.DiamondCutFacet__factory = DiamondCutFacet__factory;