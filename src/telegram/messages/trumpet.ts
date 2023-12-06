import { Calculations } from '../../web3/calculations';
import {
  formatNumberWithSuffix,
  numFor2,
  numFor3,
} from '../../utils/formats.js';

export const trumpetMsg = (calcs: Calculations): string => {
  return `
<b><a href="https://elephant.money/trumpet.html">🎺 TRUMPET 🎺</a></b>

<i>TRUNK Price:</i> <b>$${numFor3.format(calcs.trunkBusdPrice)}</b>

<i>Backed Supply:</i> <b>${formatNumberWithSuffix(
    calcs.trumpetUnderlyingSupply
  )} TRUNK</b>
<i>Trumpet Supply:</i> <b>${formatNumberWithSuffix(calcs.trumpetSupply)}</b>
<i>TRUNK/TRUMPET:</i> <b>${numFor3.format(
    calcs.trumpetPrice
  )} ($${numFor2.format(calcs.trumpetDollarPrice)})</b>

<u>Activity</u>
<i>Participants:</i> <b>${formatNumberWithSuffix(calcs.trumpetTotalUsers)}</b>
<i>Transactions:</i> <b>${formatNumberWithSuffix(calcs.trumpetTxs)}</b>
`;
};
