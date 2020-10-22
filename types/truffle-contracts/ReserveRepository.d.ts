/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface ReserveRepositoryContract
  extends Truffle.Contract<ReserveRepositoryInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ReserveRepositoryInstance>;
}

type AllEvents = never;

export interface ReserveRepositoryInstance extends Truffle.ContractInstance {
  addReserve: {
    (
      _reserve: string,
      _vTokenAddress: string,
      _loanToValue: number | BN | string,
      _liquidationThreshold: number | BN | string,
      _liquidationBonus: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _reserve: string,
      _vTokenAddress: string,
      _loanToValue: number | BN | string,
      _liquidationThreshold: number | BN | string,
      _liquidationBonus: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserve: string,
      _vTokenAddress: string,
      _loanToValue: number | BN | string,
      _liquidationThreshold: number | BN | string,
      _liquidationBonus: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserve: string,
      _vTokenAddress: string,
      _loanToValue: number | BN | string,
      _liquidationThreshold: number | BN | string,
      _liquidationBonus: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  isReserveActive(
    _reserve: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  getTotalLiquidity(
    _reserve: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  setTotalLiquidity: {
    (
      _reserve: string,
      _totalLiquidity: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _reserve: string,
      _totalLiquidity: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserve: string,
      _totalLiquidity: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserve: string,
      _totalLiquidity: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getAvailableLiquidity(
    _reserve: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  setAvailableLiquidity: {
    (
      _reserve: string,
      _availableLiquidity: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _reserve: string,
      _availableLiquidity: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserve: string,
      _availableLiquidity: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserve: string,
      _availableLiquidity: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  addLiquidity: {
    (
      _reserve: string,
      _liquidity: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _reserve: string,
      _liquidity: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserve: string,
      _liquidity: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserve: string,
      _liquidity: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setTokenContract: {
    (
      _reserve: string,
      _contractAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _reserve: string,
      _contractAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserve: string,
      _contractAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserve: string,
      _contractAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getVTokenContract(
    _reserve: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  isActive(
    _reserve: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  setActive: {
    (
      _reserve: string,
      _active: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _reserve: string,
      _active: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserve: string,
      _active: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserve: string,
      _active: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getLoanToValue(
    _reserve: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  getLiquidationThreshold(
    _reserve: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  getLiquidationBonus(
    _reserve: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  getReserveSymbol(
    _reserve: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  getReservesQty(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  getReserveByIndex(
    _index: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  methods: {
    addReserve: {
      (
        _reserve: string,
        _vTokenAddress: string,
        _loanToValue: number | BN | string,
        _liquidationThreshold: number | BN | string,
        _liquidationBonus: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _reserve: string,
        _vTokenAddress: string,
        _loanToValue: number | BN | string,
        _liquidationThreshold: number | BN | string,
        _liquidationBonus: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _reserve: string,
        _vTokenAddress: string,
        _loanToValue: number | BN | string,
        _liquidationThreshold: number | BN | string,
        _liquidationBonus: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _reserve: string,
        _vTokenAddress: string,
        _loanToValue: number | BN | string,
        _liquidationThreshold: number | BN | string,
        _liquidationBonus: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    isReserveActive(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    getTotalLiquidity(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    setTotalLiquidity: {
      (
        _reserve: string,
        _totalLiquidity: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _reserve: string,
        _totalLiquidity: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _reserve: string,
        _totalLiquidity: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _reserve: string,
        _totalLiquidity: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getAvailableLiquidity(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    setAvailableLiquidity: {
      (
        _reserve: string,
        _availableLiquidity: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _reserve: string,
        _availableLiquidity: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _reserve: string,
        _availableLiquidity: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _reserve: string,
        _availableLiquidity: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    addLiquidity: {
      (
        _reserve: string,
        _liquidity: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _reserve: string,
        _liquidity: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _reserve: string,
        _liquidity: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _reserve: string,
        _liquidity: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setTokenContract: {
      (
        _reserve: string,
        _contractAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _reserve: string,
        _contractAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _reserve: string,
        _contractAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _reserve: string,
        _contractAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getVTokenContract(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    isActive(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    setActive: {
      (
        _reserve: string,
        _active: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _reserve: string,
        _active: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _reserve: string,
        _active: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _reserve: string,
        _active: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getLoanToValue(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    getLiquidationThreshold(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    getLiquidationBonus(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    getReserveSymbol(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    getReservesQty(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    getReserveByIndex(
      _index: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
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
