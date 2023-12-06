import { BlockchainData } from '../../web3/multicall';
import { Calculations } from '../../web3/calculations';
import { formatNumberWithSuffix, numFor2 } from '../../utils/formats';

export const nftMsg = (data: BlockchainData, calcs: Calculations): string => {
  const yieldValues = {
    Daily: 365,
    Weekly: 52,
    Monthly: 12,
    Yearly: 1,
  };

  const denominator = Number(data.unlimitedNftStakingTotalSupply);

  const nftYields: string = Object.entries(yieldValues)
    .map(([period, multiplier]) => {
      const dollarValue =
        calcs.bertha1PercentHighestValue / multiplier / denominator;
      const tokenValue = calcs.bertha1Percent / multiplier / denominator;
      return `<i>${period}</i>: <b>${formatNumberWithSuffix(
        tokenValue
      )}</b> <b>($${numFor2.format(dollarValue)})</b>`;
    })
    .join('\n');

  return `
<b><a href="https://elephant.money/unlimited.html">◼️ UNLIMITED NFT ◼️</a></b>

<i>BNB Price:</i> <b>$${numFor2.format(Number(data.bnbPrice))}</b>

<u>Mint</u>
<i>Price:</i> <b>${Number(data.unlimitedNftPrice)} BNB ($${numFor2.format(
    calcs.mintValue
  )})</b>
<i>Supply:</i> <b>${formatNumberWithSuffix(
    Number(data.unlimitedNftTotalSupply)
  )} ($${formatNumberWithSuffix(calcs.nftTotalSupplyValue)})</b>
<i>Value:</i> <b>${formatNumberWithSuffix(
    Number(data.unlimitedNftMinterDeposited)
  )} BNB ($${formatNumberWithSuffix(calcs.minterDepositedValue)})</b>

<u>Marketplace</u>
<i>Price:</i> <b>${data.unlimitedNftMarketplacePrice} BNB ($${numFor2.format(
    calcs.marketPlaceValue
  )})</b>
<i>Available:</i> <b>${data.unlimitedNftMarketplaceTotalSupply}</b>
<i>Market Revenue:</i> <b>${formatNumberWithSuffix(
    Number(data.unlimitedNftMarketplaceTotalRevenue)
  )} BNB</b>
<i>NFTs Sold:</i> <b>${formatNumberWithSuffix(
    Number(data.unlimitedNftMarketplaceTotalSales)
  ).replace('.000', '')}</b>

<u>Staking</u>
<i>Staked:</i> <b>${formatNumberWithSuffix(
    Number(data.unlimitedNftStakingTotalSupply)
  )} ($${formatNumberWithSuffix(calcs.nftStakingTotalSupplyValue)})</b>
<i>Rewards:</i> <b>${formatNumberWithSuffix(
    Number(data.unlimitedNftStakingTotalRewards)
  )}</b> <b>($${formatNumberWithSuffix(calcs.nftStakingRewardsValue)})</b>
<i>1%(Bertha):</i> <b>${formatNumberWithSuffix(
    calcs.bertha1Percent
  )}</b> <b>($${formatNumberWithSuffix(calcs.bertha1PercentValue)})</b>

<u>Yield per NFT Staked</u>
${nftYields}
`;
};
