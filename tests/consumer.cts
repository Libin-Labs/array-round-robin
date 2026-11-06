import * as api from '@lp-labs/array-round-robin';
import { roundRobin } from '@lp-labs/array-round-robin';
console.log(
  roundRobin([
    ['a', 'b'],
    ['c', 'd', 'e'],
  ]),
);
// @ts-expect-error invalid argument must be rejected by declarations
api.roundRobin('not arrays');
