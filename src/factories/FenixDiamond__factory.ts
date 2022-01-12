/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FenixDiamond, FenixDiamondInterface } from "../FenixDiamond";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_contractOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_diamondCutFacet",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040526040516200269938038062002699833981016040819052620000269162001168565b6200003c826200015660201b620000b61760201c565b604080516001808252818301909252600091816020015b60408051606080820183526000808352602083015291810191909152815260200190600190039081620000535750506040805160018082528183019092529192506000919060208083019080368337019050509050631f931c1c60e01b81600081518110620000c657620000c6620013e2565b6001600160e01b031990921660209283029190910182015260408051606081019091526001600160a01b0385168152908101600081526020018281525082600081518110620001195762000119620013e2565b60200260200101819052506200014c82600060405180602001604052806000815250620001da60201b620001391760201c565b50505050620013f8565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c132080546001600160a01b031981166001600160a01b03848116918217909355604051600080516020620025ed833981519152939092169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b60005b8351811015620003e9576000848281518110620001fe57620001fe620013e2565b602002602001015160200151905060006002811115620002225762000222620013b6565b816002811115620002375762000237620013b6565b1415620002965762000290858381518110620002575762000257620013e2565b602002602001015160000151868481518110620002785762000278620013e2565b6020026020010151604001516200043860201b60201c565b620003d3565b6001816002811115620002ad57620002ad620013b6565b1415620003065762000290858381518110620002cd57620002cd620013e2565b602002602001015160000151868481518110620002ee57620002ee620013e2565b602002602001015160400151620006c260201b60201c565b60028160028111156200031d576200031d620013b6565b14156200037657620002908583815181106200033d576200033d620013e2565b6020026020010151600001518684815181106200035e576200035e620013e2565b6020026020010151604001516200095860201b60201c565b60405162461bcd60e51b815260206004820152602760248201527f4c69624469616d6f6e644375743a20496e636f727265637420466163657443756044820152663a20b1ba34b7b760c91b60648201526084015b60405180910390fd5b5080620003e08162001358565b915050620001dd565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb6738383836040516200041f93929190620011ec565b60405180910390a162000433828262000abe565b505050565b60008151116200048e5760405162461bcd60e51b815260206004820152602b60248201526000805160206200267983398151915260448201526a1858d95d081d1bc818dd5d60aa1b6064820152608401620003ca565b600080516020620025ed8339815191526001600160a01b038316620004fa5760405162461bcd60e51b815260206004820152602c60248201526000805160206200263583398151915260448201526b65206164647265737328302960a01b6064820152608401620003ca565b6001600160a01b03831660009081526001820160205260409020546001600160601b038116620005305762000530828562000cdd565b60005b8351811015620006bb576000848281518110620005545762000554620013e2565b6020908102919091018101516001600160e01b031981166000908152918690526040909120549091506001600160a01b03168015620005fc5760405162461bcd60e51b815260206004820152603560248201527f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f60448201527f6e207468617420616c72656164792065786973747300000000000000000000006064820152608401620003ca565b6001600160e01b0319821660008181526020878152604080832080546001600160a01b03908116600160a01b6001600160601b038c16021782558c168085526001808c0185529285208054938401815585528385206008840401805463ffffffff60079095166004026101000a948502191660e08a901c94909402939093179092559390925287905281546001600160a01b03191617905583620006a08162001376565b94505050508080620006b29062001358565b91505062000533565b5050505050565b6000815111620007185760405162461bcd60e51b815260206004820152602b60248201526000805160206200267983398151915260448201526a1858d95d081d1bc818dd5d60aa1b6064820152608401620003ca565b600080516020620025ed8339815191526001600160a01b038316620007845760405162461bcd60e51b815260206004820152602c60248201526000805160206200263583398151915260448201526b65206164647265737328302960a01b6064820152608401620003ca565b6001600160a01b03831660009081526001820160205260409020546001600160601b038116620007ba57620007ba828562000cdd565b60005b8351811015620006bb576000848281518110620007de57620007de620013e2565b6020908102919091018101516001600160e01b031981166000908152918690526040909120549091506001600160a01b039081169087168114156200088c5760405162461bcd60e51b815260206004820152603860248201527f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60448201527f6374696f6e20776974682073616d652066756e6374696f6e00000000000000006064820152608401620003ca565b6200089985828462000d4a565b6001600160e01b0319821660008181526020878152604080832080546001600160a01b03908116600160a01b6001600160601b038c16021782558c168085526001808c0185529285208054938401815585528385206008840401805463ffffffff60079095166004026101000a948502191660e08a901c94909402939093179092559390925287905281546001600160a01b031916179055836200093d8162001376565b945050505080806200094f9062001358565b915050620007bd565b6000815111620009ae5760405162461bcd60e51b815260206004820152602b60248201526000805160206200267983398151915260448201526a1858d95d081d1bc818dd5d60aa1b6064820152608401620003ca565b600080516020620025ed8339815191526001600160a01b0383161562000a3d5760405162461bcd60e51b815260206004820152603660248201527f4c69624469616d6f6e644375743a2052656d6f7665206661636574206164647260448201527f657373206d7573742062652061646472657373283029000000000000000000006064820152608401620003ca565b60005b825181101562000ab857600083828151811062000a615762000a61620013e2565b6020908102919091018101516001600160e01b031981166000908152918590526040909120549091506001600160a01b031662000aa084828462000d4a565b5050808062000aaf9062001358565b91505062000a40565b50505050565b6001600160a01b03821662000b485780511562000b445760405162461bcd60e51b815260206004820152603c60248201527f4c69624469616d6f6e644375743a205f696e697420697320616464726573732860448201527f3029206275745f63616c6c64617461206973206e6f7420656d707479000000006064820152608401620003ca565b5050565b600081511162000bc15760405162461bcd60e51b815260206004820152603d60248201527f4c69624469616d6f6e644375743a205f63616c6c6461746120697320656d707460448201527f7920627574205f696e6974206973206e6f7420616464726573732830290000006064820152608401620003ca565b6001600160a01b038216301462000bf75762000bf7826040518060600160405280602881526020016200260d6028913962001127565b600080836001600160a01b03168360405162000c149190620011ce565b600060405180830381855af49150503d806000811462000c51576040519150601f19603f3d011682016040523d82523d6000602084013e62000c56565b606091505b50915091508162000ab85780511562000c85578060405162461bcd60e51b8152600401620003ca9190620012f3565b60405162461bcd60e51b815260206004820152602660248201527f4c69624469616d6f6e644375743a205f696e69742066756e6374696f6e2072656044820152651d995c9d195960d21b6064820152608401620003ca565b62000d0281604051806060016040528060248152602001620026556024913962001127565b6002820180546001600160a01b0390921660008181526001948501602090815260408220860185905594840183559182529290200180546001600160a01b0319169091179055565b6001600160a01b03821662000dc85760405162461bcd60e51b815260206004820152603760248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360448201527f74696f6e207468617420646f65736e27742065786973740000000000000000006064820152608401620003ca565b6001600160a01b03821630141562000e3a5760405162461bcd60e51b815260206004820152602e60248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560448201526d3a30b1363290333ab731ba34b7b760911b6064820152608401620003ca565b6001600160e01b03198116600090815260208481526040808320546001600160a01b0386168452600180880190935290832054600160a01b9091046001600160601b0316929162000e8b916200130f565b905080821462000f84576001600160a01b0384166000908152600186016020526040812080548390811062000ec45762000ec4620013e2565b600091825260208083206008830401546001600160a01b038916845260018a019091526040909220805460079092166004026101000a90920460e01b92508291908590811062000f185762000f18620013e2565b600091825260208083206008830401805463ffffffff60079094166004026101000a938402191660e09590951c929092029390931790556001600160e01b03199290921682528690526040902080546001600160a01b0316600160a01b6001600160601b038516021790555b6001600160a01b0384166000908152600186016020526040902080548062000fb05762000fb0620013cc565b60008281526020808220600860001990940193840401805463ffffffff600460078716026101000a0219169055919092556001600160e01b031985168252869052604081205580620006bb57600285015460009062001012906001906200130f565b6001600160a01b0386166000908152600180890160205260409091200154909150808214620010c8576000876002018381548110620010555762001055620013e2565b6000918252602090912001546002890180546001600160a01b039092169250829184908110620010895762001089620013e2565b600091825260208083209190910180546001600160a01b0319166001600160a01b03948516179055929091168152600189810190925260409020018190555b86600201805480620010de57620010de620013cc565b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b0388168252600189810190915260408220015550505050505050565b813b818162000ab85760405162461bcd60e51b8152600401620003ca9190620012f3565b80516001600160a01b03811681146200116357600080fd5b919050565b600080604083850312156200117c57600080fd5b62001187836200114b565b915062001197602084016200114b565b90509250929050565b60008151808452620011ba81602086016020860162001329565b601f01601f19169290920160200192915050565b60008251620011e281846020870162001329565b9190910192915050565b60006060808301818452808751808352608092508286019150828160051b8701016020808b0160005b84811015620012c157898403607f19018652815180516001600160a01b031685528381015189860190600381106200125d57634e487b7160e01b600052602160045260246000fd5b868601526040918201519186018a905281519081905290840190600090898701905b80831015620012ab5783516001600160e01b03191682529286019260019290920191908601906200127f565b5097850197955050509082019060010162001215565b50506001600160a01b038a16908801528681036040880152620012e58189620011a0565b9a9950505050505050505050565b602081526000620013086020830184620011a0565b9392505050565b600082821015620013245762001324620013a0565b500390565b60005b83811015620013465781810151838201526020016200132c565b8381111562000ab85750506000910152565b60006000198214156200136f576200136f620013a0565b5060010190565b60006001600160601b0382811680821415620013965762001396620013a0565b6001019392505050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6111e580620014086000396000f3fe60806040523661000b57005b600080356001600160e01b0319168152600080516020611144833981519152602081905260409091205481906001600160a01b0316806100925760405162461bcd60e51b815260206004820181905260248201527f4469616d6f6e643a2046756e6374696f6e20646f6573206e6f7420657869737460448201526064015b60405180910390fd5b3660008037600080366000845af43d6000803e8080156100b1573d6000f35b3d6000fd5b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c132080546001600160a01b031981166001600160a01b03848116918217909355604051600080516020611144833981519152939092169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b60005b83518110156103025760008482815181106101595761015961112d565b60200260200101516020015190506000600281111561017a5761017a611101565b81600281111561018c5761018c611101565b14156101db576101d68583815181106101a7576101a761112d565b6020026020010151600001518684815181106101c5576101c561112d565b60200260200101516040015161034d565b6102ef565b60018160028111156101ef576101ef611101565b1415610239576101d685838151811061020a5761020a61112d565b6020026020010151600001518684815181106102285761022861112d565b6020026020010151604001516104c9565b600281600281111561024d5761024d611101565b1415610297576101d68583815181106102685761026861112d565b6020026020010151600001518684815181106102865761028661112d565b602002602001015160400151610657565b60405162461bcd60e51b815260206004820152602760248201527f4c69624469616d6f6e644375743a20496e636f727265637420466163657443756044820152663a20b1ba34b7b760c91b6064820152608401610089565b50806102fa816110a9565b91505061013c565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb67383838360405161033693929190610eb5565b60405180910390a16103488282610775565b505050565b600081511161036e5760405162461bcd60e51b815260040161008990610fcf565b6000805160206111448339815191526001600160a01b0383166103a35760405162461bcd60e51b81526004016100899061101a565b6001600160a01b03831660009081526001820160205260409020546001600160601b0381166103d6576103d68285610982565b60005b83518110156104c25760008482815181106103f6576103f661112d565b6020908102919091018101516001600160e01b031981166000908152918690526040909120549091506001600160a01b031680156104945760405162461bcd60e51b815260206004820152603560248201527f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f6044820152746e207468617420616c72656164792065786973747360581b6064820152608401610089565b6104a08583868a6109ec565b836104aa816110c4565b945050505080806104ba906110a9565b9150506103d9565b5050505050565b60008151116104ea5760405162461bcd60e51b815260040161008990610fcf565b6000805160206111448339815191526001600160a01b03831661051f5760405162461bcd60e51b81526004016100899061101a565b6001600160a01b03831660009081526001820160205260409020546001600160601b038116610552576105528285610982565b60005b83518110156104c25760008482815181106105725761057261112d565b6020908102919091018101516001600160e01b031981166000908152918690526040909120549091506001600160a01b0390811690871681141561061e5760405162461bcd60e51b815260206004820152603860248201527f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60448201527f6374696f6e20776974682073616d652066756e6374696f6e00000000000000006064820152608401610089565b610629858284610a8c565b6106358583868a6109ec565b8361063f816110c4565b9450505050808061064f906110a9565b915050610555565b60008151116106785760405162461bcd60e51b815260040161008990610fcf565b6000805160206111448339815191526001600160a01b038316156106fd5760405162461bcd60e51b815260206004820152603660248201527f4c69624469616d6f6e644375743a2052656d6f76652066616365742061646472604482015275657373206d757374206265206164647265737328302960501b6064820152608401610089565b60005b825181101561076f57600083828151811061071d5761071d61112d565b6020908102919091018101516001600160e01b031981166000908152918590526040909120549091506001600160a01b031661075a848284610a8c565b50508080610767906110a9565b915050610700565b50505050565b6001600160a01b0382166107fc578051156107f85760405162461bcd60e51b815260206004820152603c60248201527f4c69624469616d6f6e644375743a205f696e697420697320616464726573732860448201527f3029206275745f63616c6c64617461206973206e6f7420656d707479000000006064820152608401610089565b5050565b60008151116108735760405162461bcd60e51b815260206004820152603d60248201527f4c69624469616d6f6e644375743a205f63616c6c6461746120697320656d707460448201527f7920627574205f696e6974206973206e6f7420616464726573732830290000006064820152608401610089565b6001600160a01b03821630146108a5576108a58260405180606001604052806028815260200161116460289139610e4c565b600080836001600160a01b0316836040516108c09190610e99565b600060405180830381855af49150503d80600081146108fb576040519150601f19603f3d011682016040523d82523d6000602084013e610900565b606091505b50915091508161076f5780511561092b578060405162461bcd60e51b81526004016100899190610fb5565b60405162461bcd60e51b815260206004820152602660248201527f4c69624469616d6f6e644375743a205f696e69742066756e6374696f6e2072656044820152651d995c9d195960d21b6064820152608401610089565b6109a48160405180606001604052806024815260200161118c60249139610e4c565b6002820180546001600160a01b0390921660008181526001948501602090815260408220860185905594840183559182529290200180546001600160a01b0319169091179055565b6001600160e01b0319831660008181526020868152604080832080546001600160601b03909716600160a01b026001600160a01b0397881617815594909516808352600180890183529583208054968701815583528183206008870401805460e09890981c60046007909816979097026101000a96870263ffffffff9097021990971695909517909555529290915281546001600160a01b031916179055565b6001600160a01b038216610b085760405162461bcd60e51b815260206004820152603760248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360448201527f74696f6e207468617420646f65736e27742065786973740000000000000000006064820152608401610089565b6001600160a01b038216301415610b785760405162461bcd60e51b815260206004820152602e60248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560448201526d3a30b1363290333ab731ba34b7b760911b6064820152608401610089565b6001600160e01b03198116600090815260208481526040808320546001600160a01b0386168452600180880190935290832054600160a01b9091046001600160601b03169291610bc791611066565b9050808214610cb9576001600160a01b03841660009081526001860160205260408120805483908110610bfc57610bfc61112d565b600091825260208083206008830401546001600160a01b038916845260018a019091526040909220805460079092166004026101000a90920460e01b925082919085908110610c4d57610c4d61112d565b600091825260208083206008830401805463ffffffff60079094166004026101000a938402191660e09590951c929092029390931790556001600160e01b03199290921682528690526040902080546001600160a01b0316600160a01b6001600160601b038516021790555b6001600160a01b03841660009081526001860160205260409020805480610ce257610ce2611117565b60008281526020808220600860001990940193840401805463ffffffff600460078716026101000a0219169055919092556001600160e01b0319851682528690526040812055806104c2576002850154600090610d4190600190611066565b6001600160a01b0386166000908152600180890160205260409091200154909150808214610df0576000876002018381548110610d8057610d8061112d565b6000918252602090912001546002890180546001600160a01b039092169250829184908110610db157610db161112d565b600091825260208083209190910180546001600160a01b0319166001600160a01b03948516179055929091168152600189810190925260409020018190555b86600201805480610e0357610e03611117565b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b0388168252600189810190915260408220015550505050505050565b813b818161076f5760405162461bcd60e51b81526004016100899190610fb5565b60008151808452610e8581602086016020860161107d565b601f01601f19169290920160200192915050565b60008251610eab81846020870161107d565b9190910192915050565b60006060808301818452808751808352608092508286019150828160051b8701016020808b0160005b84811015610f8557898403607f19018652815180516001600160a01b03168552838101518986019060038110610f2457634e487b7160e01b600052602160045260246000fd5b868601526040918201519186018a905281519081905290840190600090898701905b80831015610f705783516001600160e01b0319168252928601926001929092019190860190610f46565b50978501979550505090820190600101610ede565b50506001600160a01b038a16908801528681036040880152610fa78189610e6d565b9a9950505050505050505050565b602081526000610fc86020830184610e6d565b9392505050565b6020808252602b908201527f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660408201526a1858d95d081d1bc818dd5d60aa1b606082015260800190565b6020808252602c908201527f4c69624469616d6f6e644375743a204164642066616365742063616e2774206260408201526b65206164647265737328302960a01b606082015260800190565b600082821015611078576110786110eb565b500390565b60005b83811015611098578181015183820152602001611080565b8381111561076f5750506000910152565b60006000198214156110bd576110bd6110eb565b5060010190565b60006001600160601b03808316818114156110e1576110e16110eb565b6001019392505050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052603260045260246000fdfec8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c4c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a204e657720666163657420686173206e6f20636f6465a2646970667358221220795ef6cc7673851b890285a5dba416996941361b46ed69aa34655dcb7d15532464736f6c63430008070033c8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c4c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a204164642066616365742063616e277420624c69624469616d6f6e644375743a204e657720666163657420686173206e6f20636f64654c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e2066";

export class FenixDiamond__factory extends ContractFactory {
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
    _contractOwner: string,
    _diamondCutFacet: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<FenixDiamond> {
    return super.deploy(
      _contractOwner,
      _diamondCutFacet,
      overrides || {}
    ) as Promise<FenixDiamond>;
  }
  getDeployTransaction(
    _contractOwner: string,
    _diamondCutFacet: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _contractOwner,
      _diamondCutFacet,
      overrides || {}
    );
  }
  attach(address: string): FenixDiamond {
    return super.attach(address) as FenixDiamond;
  }
  connect(signer: Signer): FenixDiamond__factory {
    return super.connect(signer) as FenixDiamond__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FenixDiamondInterface {
    return new utils.Interface(_abi) as FenixDiamondInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FenixDiamond {
    return new Contract(address, _abi, signerOrProvider) as FenixDiamond;
  }
}
