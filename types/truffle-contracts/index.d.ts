/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { AaveProviderContract } from "./AaveProvider";
import { AbstractProviderContract } from "./AbstractProvider";
import { AddressStorageContract } from "./AddressStorage";
import { ICoreContract } from "./ICore";
import { Ierc20Contract } from "./Ierc20";
import { ILendingPoolContract } from "./ILendingPool";
import { ILendingPoolCoreContract } from "./ILendingPoolCore";
import { ILendingProviderContract } from "./ILendingProvider";
import { MigrationsContract } from "./Migrations";
import { OwnableContract } from "./Ownable";
import { PoolContract } from "./Pool";
import { ProvidersManagerContract } from "./ProvidersManager";

declare global {
  namespace Truffle {
    interface Artifacts {
      require(name: "AaveProvider"): AaveProviderContract;
      require(name: "AbstractProvider"): AbstractProviderContract;
      require(name: "AddressStorage"): AddressStorageContract;
      require(name: "ICore"): ICoreContract;
      require(name: "IERC20"): Ierc20Contract;
      require(name: "ILendingPool"): ILendingPoolContract;
      require(name: "ILendingPoolCore"): ILendingPoolCoreContract;
      require(name: "ILendingProvider"): ILendingProviderContract;
      require(name: "Migrations"): MigrationsContract;
      require(name: "Ownable"): OwnableContract;
      require(name: "Pool"): PoolContract;
      require(name: "ProvidersManager"): ProvidersManagerContract;
    }
  }
}

export { AaveProviderContract, AaveProviderInstance } from "./AaveProvider";
export {
  AbstractProviderContract,
  AbstractProviderInstance
} from "./AbstractProvider";
export {
  AddressStorageContract,
  AddressStorageInstance
} from "./AddressStorage";
export { ICoreContract, ICoreInstance } from "./ICore";
export { Ierc20Contract, Ierc20Instance } from "./Ierc20";
export { ILendingPoolContract, ILendingPoolInstance } from "./ILendingPool";
export {
  ILendingPoolCoreContract,
  ILendingPoolCoreInstance
} from "./ILendingPoolCore";
export {
  ILendingProviderContract,
  ILendingProviderInstance
} from "./ILendingProvider";
export { MigrationsContract, MigrationsInstance } from "./Migrations";
export { OwnableContract, OwnableInstance } from "./Ownable";
export { PoolContract, PoolInstance } from "./Pool";
export {
  ProvidersManagerContract,
  ProvidersManagerInstance
} from "./ProvidersManager";
