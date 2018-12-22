const Rgy = require('../../src/rgy');
const { Start, End, Numbers } = require('../../src/helpers/constants.js');
const Range = require('../../src/helpers/range');

/*
  Subject: Hex Color

  - RegEx -
  /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/

  - Matches -
  #FFF or #00AACC
*/

const RgyHexColor = Rgy([
  Start,
  { any: '#', length: 1 },
  {
    options: [{ any: [Range('a', 'F'), Numbers], length: 3 }, { any: [Range('a', 'F'), Numbers], length: 6 }],
  },
  End,
]);

const valid = [
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',
  '#80B300',
  '#809900',
  '#E6B3B3',
  '#6680B3',
  '#66991A',
  '#FF99E6',
  '#CCFF1A',
  '#FF1A66',
  '#E6331A',
  '#33FFCC',
  '#66994D',
  '#B366CC',
  '#480',
  '#B30',
  '#C8C',
  '#664',
  '#91F',
  '#E6F',
  '#4BF',
  '#1B9',
  '#E6B',
  '#391',
  '#C99',
  '#BB1',
  '#0E8',
  '#486',
  '#898',
  '#EF8',
  '#1F3',
  '#993',
  '#F38',
  '#CC0',
  '#6E4',
  '#48C',
  '#90B',
  '#E46',
  '#4B8',
  '#F44',
  '#9EE',
  '#66F',
];

const invalid = ['966', '99FF-9', '#80B30 ', '#809900 ', ' #E6B3B3', '6680B3', '#6Z991A', '#FG9', '#C1', '#FF1A6'];

describe('Case Study: HexColors', () => {
  describe('Valid Colors', () => {
    valid.forEach(hexColor => {
      it(`Correctly tests for - ${hexColor}`, () => {
        const test = RgyHexColor.test(hexColor);
        expect(test).toBe(true);
      });
    });
  });

  describe('Invalid Colors', () => {
    invalid.forEach(hexColor => {
      it(`Correctly tests for - ${hexColor}`, () => {
        const test = RgyHexColor.test(hexColor);
        expect(test).toBe(false);
      });
    });
  });
});
