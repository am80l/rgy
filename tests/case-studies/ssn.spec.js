import Rgy from '../../src/rgy';
import { Start, End, Numbers } from '../../src/helpers/constants.js';
import Range from '../../src/helpers/range';

/*
  Subject: Social Security Numbers

  - RegEx -
  ^(?!(000|666|9))\d{3}-(?!00)\d{2}-(?!0000)\d{4}$
  
  - Matches -
  555-55-5555
*/

const valid = [
  '490-26-5398', 
  '304-22-3576', 
  '452-76-2575', 
  '325-22-4183',
  '605-25-6087',
  '142-82-0285',
  '461-86-8525',
  '255-93-1560',
  '125-60-3727',
  '293-16-2649',
  '267-07-9012',
  '233-27-3624',
  '587-74-2698',
  '532-48-3636',
  '117-07-7946',
  '067-44-2122',
  '014-38-0028',
  '128-58-8341',
  '550-81-6351',
  '225-78-2914',
  '435-69-4690',
  '471-04-5331',
  '698-07-5286',
];

const invalid = [
  '000-58-8341',
  '666-81-6351',
  '900-78-2914',
  '435-00-4690',
  '471-04-0000',
  'a98-07-5286',
  '0b0-58-8341',
  '66c-81-6351',
  '900-d8-2914',
  '435-0e-4690',
  '471-04-f000',
  '698-07-5g86',
  '000-58-83h1',
  '666-81-635i',
  '90078-2914',
  '435-004690',
  '471!04-0000',
  '698-0795286',
  '69820795286'
]

// Match: Any 1 numbers
const Match1Numbers = { any: Range(0, 8), length: 1 };

// Match: Any 2 numbers
const Match2Numbers = { any: Numbers, length: 2 };

// Match: Any 4 numbers
const Match4Numbers = { any: Numbers, length: 4 };

// @RGY
const RgySsn = Rgy([
  Start,
  {
    options: [
      [Match1Numbers, Match2Numbers, { any: '-' }, Match2Numbers, { any: '-' }, Match4Numbers],
    ],
  },
  End,
]);

// TODO: Put in these conditions
// SSA will not issue SSNs beginning with the number “9”.
// SSA will not issue SSNs beginning with the number “666” in positions 1 – 3.
// SSA will not issue SSNs beginning with the number “000” in positions 1 – 3.
// SSA will not issue SSNs with the number “00” in positions 4 – 5.
// SSA will not issue SSNs with the number “0000” in positions 6 – 9

describe('Case Study: Social Security Numbers', () => {
  describe('Valid Social Security Numbers', () => {
    valid.forEach(ssn => {
      it(`Correctly tests for - ${ssn}`, () => {
        const test = RgySsn.test(ssn);
        expect(test).toBe(true);
      });
    });
  });

  describe('Invalid Social Security Numbers', () => {
    invalid.forEach(ssn => {
      it(`Correctly tests for - ${ssn}`, () => {
        const test = RgySsn.test(ssn);
        expect(test).toBe(false);
      });
    });
  });
});
