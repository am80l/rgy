const Rgy = require('../../src/rgy');
const { Start, End, Numbers } = require('../../src/helpers/constants.js');
const Range = require('../../src/helpers/range');

/*
  Subject: Date

  - RegEx -
  /^(0?[1-9]|[12][0-9]|3[01])([ \/\-])(0?[1-9]|1[012])\2([0-9][0-9][0-9][0-9])(([ -])([0-1]?[0-9]|2[0-3]):[0-5]?[0-9]:[0-5]?[0-9])?$/

  - Matches -
  dd/mm/yy
*/

// Helper Function: Add 0 if length is 1
const PadLeftZero = n => ((n + '').length === 1 ? '0' + n : '' + n);

const DayRange = Range(1, 31).map(PadLeftZero);
const MonthRange = Range(1, 12).map(PadLeftZero);

// Match: Slash
const MatchSlash = { any: '/', length: 1 };

// @RGY
const RgyDate = Rgy([
  Start,
  { any: MonthRange, length: 2 },
  MatchSlash,
  { any: DayRange, length: 2 },
  MatchSlash,
  { any: Numbers, length: 4 },
  End,
]);

const valid = ['01/12/1943', '12/10/2020', '05/01/2011'];

const invalid = ['1/21/1943', '13/21/2012', '10/10/201', '01/04.1002', '10/34/2010'];

describe('Case Study: Date', () => {
  describe('Valid Dates', () => {
    valid.forEach(ip => {
      it(`Correctly tests for - ${ip}`, () => {
        const test = RgyDate.test(ip);
        expect(test).toBe(true);
      });
    });
  });

  describe('Invalid Dates', () => {
    invalid.forEach(ip => {
      it(`Correctly tests for - ${ip}`, () => {
        const test = RgyDate.test(ip);
        expect(test).toBe(false);
      });
    });
  });
});
