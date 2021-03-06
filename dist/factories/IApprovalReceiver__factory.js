"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IApprovalReceiver__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "onTokenApproval",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var IApprovalReceiver__factory = /** @class */ (function () {
    function IApprovalReceiver__factory() {
    }
    IApprovalReceiver__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IApprovalReceiver__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IApprovalReceiver__factory.abi = _abi;
    return IApprovalReceiver__factory;
}());
exports.IApprovalReceiver__factory = IApprovalReceiver__factory;
