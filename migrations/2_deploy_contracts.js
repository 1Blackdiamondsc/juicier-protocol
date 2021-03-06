"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KOVAN_NETWORK_ID = void 0;
const bignumber_js_1 = require("bignumber.js");
const prompt = require('prompt-sync')();
exports.KOVAN_NETWORK_ID = 'kovan';
const AaveContracts = {
    LendingPoolAddressesProvider: '0x506B0B2CF20FAA8f38a4E2B524EE43e1f4458Cc5',
    LendingPool: '0x580D4Fdc4BF8f9b5ae2fb9225D584fED4AD5375c',
    LendingPoolCore: '0x95D1189Ed88B380E319dF73fF00E479fcc4CFa45',
};
const tokens = [
    {
        name: 'Dai',
        symbol: 'DAI',
        token: '0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD',
        aToken: '0x58AD4cB396411B691A9AAb6F74545b2C5217FE6a',
    },
    {
        name: 'USD Coin',
        symbol: 'USDC',
        token: '0xe22da380ee6B445bb8273C81944ADEB6E8450422',
        aToken: '0x02F626c6ccb6D2ebC071c068DC1f02Bf5693416a',
    },
    {
        name: 'TrueUSD',
        symbol: 'TUSD',
        token: '0x1c4a937d171752e1313D70fb16Ae2ea02f86303e',
        aToken: '0xA79383e0d2925527ba5Ec1c1bcaA13c28EE00314',
    },
    {
        name: 'USDT Coin',
        symbol: 'USDT',
        token: '0x13512979ADE267AB5100878E2e0f485B568328a4',
        aToken: '0xA01bA9fB493b851F4Ac5093A324CB081A909C34B',
    },
    {
        name: 'Synthetix USD',
        symbol: 'SUSD',
        token: '0xD868790F57B39C9B2B51b12de046975f986675f9',
        aToken: '0xb9c1434aB6d5811D1D0E92E8266A37Ae8328e901',
    },
    {
        name: 'Basic Attention Token',
        symbol: 'BAT',
        token: '0x2d12186Fbb9f9a8C28B3FfdD4c42920f8539D738',
        aToken: '0x5ad67de6Fb697e92a7dE99d991F7CdB77EdF5F74',
    },
    {
        name: 'ChainLink',
        symbol: 'LINK',
        token: '0xAD5ce863aE3E4E9394Ab43d4ba0D80f419F61789',
        aToken: '0xEC23855Ff01012E1823807CE19a790CeBc4A64dA',
    },
    {
        name: 'WBTC Coin',
        symbol: 'WBTC',
        token: '0x3b92f58feD223E2cB1bCe4c286BD97e42f2A12EA',
        aToken: '0xCD5C52C7B30468D16771193C47eAFF43EFc47f5C',
    },
    {
        name: 'yearn.finance',
        symbol: 'YFI',
        token: '0x28a8cdD5f533aaC3053d4E97980A7f1e174Db902',
        aToken: '0x6fcA32fB852e875944BE06B2955469494f7fb5A0',
    },
];
const DAIMockToken = artifacts.require('DAIMockToken');
const AToken = artifacts.require('AToken');
async function generateMockTokens(deployer, deployerAddress, aaveLandingPoolAddress) {
    const result = [];
    for (let token of tokens) {
        // Dai Mock creation
        await deployer.deploy(DAIMockToken, token.name, token.symbol);
        token.token = DAIMockToken.address;
        const tokenContract = await DAIMockToken.deployed();
        const tx = await tokenContract.mint(deployerAddress, new bignumber_js_1.BigNumber('1e22').toFixed(0));
        const balance = await tokenContract.balanceOf(deployerAddress);
        console.log('mint TX', deployerAddress, balance);
        // AToken creation
        await deployer.deploy(AToken, aaveLandingPoolAddress, DAIMockToken.address, 18, `A${token.name}`, `a${token.symbol}`);
        token.aToken = AToken.address;
        result.push(token);
    }
    return result;
}
const aTokens = {
    aETH: '0xD483B49F2d55D2c53D32bE6efF735cB001880F79',
    aDAI: '0x58AD4cB396411B691A9AAb6F74545b2C5217FE6a',
    aUSDC: '0x02F626c6ccb6D2ebC071c068DC1f02Bf5693416a',
    aSUSD: '0xb9c1434aB6d5811D1D0E92E8266A37Ae8328e901',
    aTUSD: '0x4c76f1b48316489E8a3304Db21cdAeC271cF6eC3',
    aUSDT: '0xA01bA9fB493b851F4Ac5093A324CB081A909C34B',
    aBAT: '0x5ad67de6Fb697e92a7dE99d991F7CdB77EdF5F74',
    aKNC: '0xB08EC9EdB6BD7971220FEa04644174f3EbfbDe96',
    aLEND: '0xcBa131C7FB05fe3c9720375cD86C99773faAbF23',
    aLINK: '0xEC23855Ff01012E1823807CE19a790CeBc4A64dA',
    aMANA: '0xe68204D69Cbfaf6124190EFa65ad9C591C0D48e4',
    aMKR: '0xfB762B5BAb463f7F35610Ba65e2534993a1c09C6',
    aREP: '0x0578469469Db1129271f4eb3EB9D97426506c44c',
    aSNX: '0xb4D480f963f4F685F1D51d2B6159D126658B1dA8',
    aWBTC: '0xCD5C52C7B30468D16771193C47eAFF43EFc47f5C',
    aZRX: '0x0F456900c6bdFddfA27E1E4E4c84EB823a2eE13c',
};
// Repositories
const AddressRepository = artifacts.require('AddressRepository');
const ProviderRepository = artifacts.require('ProviderRepository');
const ReserveRepository = artifacts.require('ReserveRepository');
const PriceRepository = artifacts.require('PriceRepositoryMock');
const UserBalanceRepository = artifacts.require('UserBalanceRepository');
// Services
const ProviderService = artifacts.require('ProviderService');
const RiskService = artifacts.require('RiskService');
const PoolService = artifacts.require('PoolService');
// Providers
const AaveProvider = artifacts.require('AaveProvider');
// Mocks
const AaveLendingPoolMock = artifacts.require('AaveLendingPoolMock');
// Tokens
const VToken = artifacts.require('VToken');
module.exports = async function (deployer, network, accounts) {
    console.log('Deploy at: ', network);
    const mockIsNeedeed = network.indexOf(exports.KOVAN_NETWORK_ID) === -1;
    console.log(`Detected a network ${network}. Mock flag is ${mockIsNeedeed}! Type 'yes' to continue.`);
    // const cont = prompt(`> `);
    // if (cont.toString().toLowerCase() !== 'yes') {
    //   process.exit(1);
    // }
    try {
        await deployer.deploy(AddressRepository);
        const _addressRepository = await AddressRepository.deployed();
        console.log('ADDRESS REPOSITORY DEPOLYED AT: ', _addressRepository.address);
        await deployer.deploy(ProviderRepository);
        await _addressRepository.setProviderRepository(ProviderRepository.address);
        const _providerRepository = await ProviderRepository.deployed();
        console.log('ADDRESS REPOSITORY DEPOLYED AT: ', _providerRepository.address);
        await deployer.deploy(ReserveRepository);
        await _addressRepository.setReserveRepository(ReserveRepository.address);
        const _reserveRepository = await ReserveRepository.deployed();
        console.log('RESERVE REPOSITORY DEPOLYED AT: ', _providerRepository.address);
        await deployer.deploy(PriceRepository);
        await _addressRepository.setPriceRepository(PriceRepository.address);
        await deployer.deploy(UserBalanceRepository);
        await _addressRepository.setUserBalanceRepository(UserBalanceRepository.address);
        await deployer.deploy(ProviderService, AddressRepository.address);
        await _addressRepository.setProviderService(ProviderService.address);
        await deployer.deploy(RiskService, AddressRepository.address);
        await _addressRepository.setRiskService(RiskService.address);
        await deployer.deploy(PoolService, AddressRepository.address);
        await _addressRepository.setPoolService(PoolService.address);
        let aaveLendingPoolAddress = AaveContracts.LendingPool;
        let aavePoolCoreAddressaaveLending = AaveContracts.LendingPoolCore;
        let _aaveLendingPoolMock;
        // Aave Lending Pool
        if (mockIsNeedeed) {
            await deployer.deploy(AaveLendingPoolMock);
            aaveLendingPoolAddress = AaveLendingPoolMock.address;
            aavePoolCoreAddressaaveLending = AaveLendingPoolMock.address;
            _aaveLendingPoolMock = await AaveLendingPoolMock.deployed();
        }
        await deployer.deploy(AaveProvider, aaveLendingPoolAddress, aavePoolCoreAddressaaveLending);
        await _providerRepository.addProvider(AaveProvider.address);
        const _aaveProvider = await AaveProvider.deployed();
        let tokensToConnect = tokens;
        if (mockIsNeedeed) {
            tokensToConnect = await generateMockTokens(deployer, accounts[0], aaveLendingPoolAddress);
        }
        for (let t of tokensToConnect) {
            await _aaveProvider.addReserve(t.token, t.aToken);
            if (mockIsNeedeed)
                await (_aaveLendingPoolMock === null || _aaveLendingPoolMock === void 0 ? void 0 : _aaveLendingPoolMock.setReserve(t.token, 10000000, 232323, 34, 54, 33, 75, 39, 23, 15, 5, 45, t.aToken, Math.floor(Date.now() / 1000).toString()));
            await deployer.deploy(VToken, _addressRepository.address, t.token, 18, t.name, t.symbol);
            const vToken = await VToken.deployed();
            await _reserveRepository.addReserve(t.token, vToken.address, 70, 80, 5);
        }
    }
    catch (err) {
        console.log('ERROR HAPPENED DURING DEPLOY', err);
    }
    // DEPLOY VITAMIN TOKENS
};
//# sourceMappingURL=2_deploy_contracts.js.map