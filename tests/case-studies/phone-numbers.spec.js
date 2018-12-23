import Rgy from '../../src/rgy';
import { Start, End, Numbers } from '../../src/helpers/constants.js';

/*
  Subject: Phone Number

  - RegEx -
  /^\+?(\d.*){3,}$/

  - Matches -
  555-555-5555
*/

// Match: Any 3 numbers
const Match3Numbers = { any: Numbers, length: 3 };

// Match: Any 4 numbers
const Match4Numbers = { any: Numbers, length: 4 };

// @RGY
const RgyPhoneNr = Rgy([
  Start,
  {
    options: [
      [Match3Numbers, { any: '-' }, Match3Numbers, { any: '-' }, Match4Numbers],
      [Match3Numbers, { any: '.' }, Match3Numbers, { any: '.' }, Match4Numbers],
    ],
  },
  End,
]);

const valid = [
  '773-253-1978',
  '620-266-0958',
  '952-387-6129',
  '498-230-6684',
  '256-804-8379',
  '702-945-5861',
  '590-634-9441',
  '376-274-3667',
  '258-854-8182',
  '425-664-9544',
  '662-356-6908',
  '366-914-4062',
  '998-847-3660',
  '246-385-2382',
  '607-923-3770',
  '960.735.2169',
  '923.899.5966',
  '927.211.7217',
  '935.380.3555',
  '740.771.2386',
  '450.368.4170',
  '831.470.0311',
  '486.615.5074',
  '593.893.7924',
  '220.696.0944',
  '517.482.2482',
  '347.915.9089',
  '838.763.8169',
  '501.924.4772',
  '863.826.0542',
];

const invalid = [
  '77-253-1978',
  '620-66-0958',
  '952-387-129',
  '4982-230-6684',
  '256-8204-8379',
  '702-945-52861',
  '590..634-9441',
  '376-274--3667',
  '258-854.8182',
  ' 425-664-9544',
  '662-356-6908 ',
  '366-914-406a',
  'x98-847-3660',
];

describe('Case Study: Phone Numbers', () => {
  describe('Valid Phone Numbers', () => {
    valid.forEach(nr => {
      it(`Correctly tests for - ${nr}`, () => {
        const test = RgyPhoneNr.test(nr);
        expect(test).toBe(true);
      });
    });
  });

  describe('Invalid Phone Numbers', () => {
    invalid.forEach(nr => {
      it(`Correctly tests for - ${nr}`, () => {
        const test = RgyPhoneNr.test(nr);
        expect(test).toBe(false);
      });
    });
  });
});
