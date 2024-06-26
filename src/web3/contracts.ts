import { parseAbi } from 'viem';

export const elephantTotalSupply = 1_000_000_000_000_000;

export const erc20Abi = parseAbi([
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function balanceOf(address) view returns (uint)',
  'function totalSupply() view returns (uint256)',
]);

const chainlinkAbi = parseAbi([
  'function latestAnswer() view returns (int256)',
]);

const lpAbi = parseAbi([
  'function getReserves() view returns (uint112, uint112, uint32)',
]);

const nftAbi = parseAbi([
  'function price() view returns (uint256)',
  'function totalRevenue() view returns (uint256)',
  'function totalSales() view returns (uint256)',
]);

export const contracts = {
  chainlinkBnb: {
    address: '0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE',
    abi: chainlinkAbi,
  },
  chainlinkBusd: {
    address: '0xcBb98864Ef56E9042e7d2efef76141f15731B82f',
    abi: chainlinkAbi,
  },
  chainlinkBtc: {
    address: '0x264990fbd0A4796A3E3d8E37C4d5F87a3aCa5Ebf',
    abi: chainlinkAbi,
  },
  busd: {
    address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    abi: erc20Abi,
  },
  opBorrowingDelegator: {
    address: '0xF436F8FE7B26D87eb74e5446aCEc2e8aD4075E47',
    abi: [],
  },
  liquidityDriveEvent: {
    address: '0xF9d64317d4cdA0a6B4Ef41a32E301eA64f8B5Cb3',
    abi: [],
  },
  elephant: {
    address: '0xE283D0e3B8c102BAdF5E8166B73E02D96d92F688',
    abi: erc20Abi,
  },
  elephantWbnb: {
    address: '0x1CEa83EC5E48D9157fCAe27a19807BeF79195Ce1',
    abi: lpAbi,
  },
  elephantBusd: {
    address: '0x647bc907d520C3f63bE38d01DBd979f5606beC48',
    abi: lpAbi,
  },
  bertha: {
    address: '0xAF0980A0f52954777C491166E7F40DB2B6fBb4Fc',
    abi: [],
  },
  graveyard: {
    address: '0xF7cC784BD260eafC1193D337fFcEA4D6ddA0dd71',
    abi: [],
  },
  trunk: {
    address: '0xdd325C38b12903B727D16961e61333f4871A70E0',
    abi: erc20Abi,
  },
  trunkBusd: {
    address: '0xf15A72B15fC4CAeD6FaDB1ba7347f6CCD1E0Aede',
    abi: lpAbi,
  },
  trunkWbnb: {
    address: '0xc979B1563B7CF99670b0bc80E960E5004aDc2cc6',
    abi: lpAbi,
  },
  trunkTreasury: {
    address: '0xaCEf13009D7E5701798a0D2c7cc7E07f6937bfDd',
    abi: [],
  },
  trunkBurnWallet: {
    address: '0x0000000000000000000000000000000000000001',
    abi: [],
  },
  trumpet: {
    address: '0x574a691D05EeE825299024b2dE584B208647e073',
    abi: parseAbi([
      'function getInfo() view returns (uint256, uint256, uint256, uint256, uint256)',
    ]),
  },
  futures: {
    address: '0x778c191EcC493fe03A0a2364cfEa264CB5e38440',
    abi: parseAbi([
      'function getInfo() view returns (uint256, uint256, uint256, uint256, uint256, uint256, uint256)',
      'function scaleByPeg(uint256) view returns (uint256)',
    ]),
  },
  unlimitedNft: {
    address: '0xb92afeDC8f8618BE4198fbE5d97adB7C60aB3198',
    abi: nftAbi,
  },
  unlimitedNftMinter: {
    address: '0x29A8336a58E9B65b5bBC6F626B5B855CdaA45c06',
    abi: parseAbi([
      'function deposited() view returns (uint256)',
      'function busd_value_deposited() view returns (uint256)',
    ]),
  },
  unlimitedNftStaking: {
    address: '0xB2b1D88AA427C2E1849e6D9Ab2169d57f91C4Fb3',
    abi: parseAbi(['function totalRewards() view returns (uint256)']),
  },
  unlimitedNftMarketplace: {
    address: '0x4D1E19B5A6e68abe4Dc5cE35F161070692802b7C',
    abi: nftAbi,
  },
  busdBufferPool: {
    address: '0xd9dE89efB084FfF7900Eac23F2A991894500Ec3E',
    abi: [],
  },
  busdTreasury: {
    address: '0xCb5a02BB3a38e92E591d323d6824586608cE8cE4',
    abi: [],
  },
  bnbReserve: {
    address: '0x98F6c7c953Cf4cef0fd632b2509c9e349687FC92',
    abi: [],
  },
  bnbReserveStrategy: {
    address: '0xcccc27bAFb2008F800c918aB2cd260A3b051b43C',
    abi: parseAbi(['function available() view returns (uint256, uint256)']),
  },
  AprForward: {
    address: '0x01FB3809de463d114B66d7E428035196CD6AE484',
    abi: parseAbi([
      'function available() view returns (uint256, uint256)',
      'function dailyEstimate() view returns (uint256, uint256)',
    ]),
  },
  pegSupportTreasuryStrategy: {
    address: '0xcECba44Ce9EE16948551E85864f3EEf652174587',
    abi: parseAbi(['function available() view returns (uint256, uint256)']),
  },
  rainyDayFund: {
    address: '0xc6a42b74867D1F7049192FfB6d0A9D77696d18bb',
    abi: [],
  },
  btcTurbine: {
    address: '0x69C714f868855eC3F24dfff0fd5F1805642F2D86',
    abi: parseAbi(['function balanceUnderlying() view returns (uint256)']),
  },
  trunkTurbine: {
    address: '0x6De7dEe23b27a6ABD1b3a1a4C0C40B128620a51d',
    abi: parseAbi(['function balanceUnderlying() view returns (uint256)']),
  },
} as const;
