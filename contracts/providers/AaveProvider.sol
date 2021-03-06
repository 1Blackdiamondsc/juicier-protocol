// SPDX-License-Identifier: agpl-3.0
pragma solidity ^0.6.10;

import "../lib/SafeERC20.sol";
import "../lib/EthAddressLib.sol";
import "./aave-protocol/ATokenMock.sol";
import "./aave-protocol/IAaveLendingPool.sol";
import "./aave-protocol/ILendingPoolCore.sol";
import "./AbstractProvider.sol";

/**
 * @title AaveProvider
 * @notice Lending provider implementation for Aave protocol
 * @author Mikhail Lazarev, github.com/MikaelLazarev
 */
contract AaveProvider is AbstractProvider {
  using SafeERC20 for ERC20;
  address private lendingPoolAddress;
  address private lendingPoolCoreAddress;
  AToken private aToken;

  mapping(address => AToken) aTokens;

  constructor(address _lendingPoolAddress, address _lendingPoolCoreAddress)
    public
  {
    lendingPoolAddress = _lendingPoolAddress;
    lendingPoolCoreAddress = _lendingPoolCoreAddress;
  }

  function addReserve(address _reserve, address _aTokenAddress) external {
    aTokens[_reserve] = AToken(_aTokenAddress);
  }

  // Deposit money to provider pool
  function deposit(address _reserve, uint256 _amount) public override payable {
    ERC20(_reserve).approve(lendingPoolCoreAddress, _amount);
    getLendingPool().deposit(_reserve, _amount, 0);
    super.deposit(_reserve, _amount);
  }

  function redeemUnderlying(
    address _reserve,
    address payable _user,
    uint256 _amount
  ) public virtual override {
    require(
      address(aTokens[_reserve]) != address(0),
      "AavaProvider: aToken doesn't set for this reserve"
    );

    // Redeem tokens from AToken contract to this one
    aTokens[_reserve].redeem(_amount);

    // Transfer tokens to user
    ERC20(_reserve).safeTransfer(_user, _amount);

    // getLendingPool().redeemUnderlying(_reserve, _user, _amount, 0);
    super.redeemUnderlying(_reserve, _user, _amount);
  }

  /**
   * @dev transfers to the user a specific amount from the reserve.
   * @param _reserve the address of the reserve where the transfer is happening
   * @param _user the address of the user receiving the transfer
   * @param _amount the amount being transferred
   **/
  function transferToUser(
    address _reserve,
    address payable _user,
    uint256 _amount
  ) internal {
    if (_reserve != EthAddressLib.ethAddress()) {
      ERC20(_reserve).safeTransfer(_user, _amount);
    } else {
      //solium-disable-next-line
      (bool result, ) = _user.call.value(_amount).gas(50000)("");
      require(result, "Transfer of ETH failed");
    }
  }

  function getReserves() external override returns (address[] memory) {
    return getLendingPool().getReserves();
  }

  function getLendingPool() internal view returns (IAaveLendingPool) {
    return IAaveLendingPool(lendingPoolAddress);
  }

  // function getLendingPoolCore() internal view returns (ILendingPoolCore) {
  //     return ILendingPoolCore(lendingPoolCoreAddress);
  // }

  function getReserveData(address _reserveAddress)
    external
    override
    view
    returns (
      uint256 totalLiquidity,
      uint256 availableLiquidity,
      uint256 totalBorrowsVariable,
      uint256 liquidityRate,
      uint256 variableBorrowRate,
      uint256 utilizationRate,
      uint256 liquidityIndex,
      uint256 variableBorrowIndex,
      address aTokenAddress,
      uint40 lastUpdateTimestamp
    )
  {
    (
      totalLiquidity,
      availableLiquidity,
      totalBorrowsVariable,
      liquidityRate,
      variableBorrowRate
    ) = getReserveLiquidityAndRates(_reserveAddress);

    (
      utilizationRate,
      liquidityIndex,
      variableBorrowIndex,
      aTokenAddress,
      lastUpdateTimestamp
    ) = getReserveIndexes(_reserveAddress);
  }

  function getReserveLiquidityAndRates(address _reserve)
    internal
    view
    returns (
      uint256 totalLiquidity,
      uint256 availableLiquidity,
      uint256 totalBorrowsVariable,
      uint256 liquidityRate,
      uint256 variableBorrowRate
    )
  {
    (
      totalLiquidity,
      availableLiquidity,
      ,
      totalBorrowsVariable,
      liquidityRate,
      variableBorrowRate,
      ,
      ,
      ,
      ,
      ,
      ,

    ) = getLendingPool().getReserveData(_reserve);
  }

  function getReserveIndexes(address _reserve)
    internal
    view
    returns (
      uint256 utilizationRate,
      uint256 liquidityIndex,
      uint256 variableBorrowIndex,
      address aTokenAddress,
      uint40 lastUpdateTimestamp
    )
  {
    (
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      utilizationRate,
      liquidityIndex,
      variableBorrowIndex,
      aTokenAddress,
      lastUpdateTimestamp
    ) = getLendingPool().getReserveData(_reserve);
  }

  function getReserveLiquidityRate(address _reserveAddress)
    external
    override
    view
    returns (uint256 liquidityRate)
  {
    (, , , , liquidityRate, , , , , , , , ) = getLendingPool().getReserveData(
      _reserveAddress
    );
  }

  function getReserveBorrowRate(address _reserveAddress)
    external
    override
    view
    returns (uint256 variableBorrowRate)
  {
    (, , , , , variableBorrowRate, , , , , , , ) = getLendingPool()
      .getReserveData(_reserveAddress);
  }

  function getReserveManagerForApprove(address _)
    external
    override
    view
    returns (address)
  {
    return address(getLendingPool());
  }
}
