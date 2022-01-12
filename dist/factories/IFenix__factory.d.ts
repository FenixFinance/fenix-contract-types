import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IFenix, IFenixInterface } from "../IFenix";
export declare class IFenix__factory {
    static readonly abi: {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): IFenixInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFenix;
}
