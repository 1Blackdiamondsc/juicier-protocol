/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface IPriceRepositoryContract
  extends Truffle.Contract<IPriceRepositoryInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<IPriceRepositoryInstance>;
}

type AllEvents = never;

export interface IPriceRepositoryInstance extends Truffle.ContractInstance {
  getReservePriceInETH(
    _reserve: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  methods: {
    getReservePriceInETH(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
