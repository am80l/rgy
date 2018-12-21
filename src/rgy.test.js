const Rgy = require('./rgy.js');

describe('Range', () => {
  it('generates all lower case letters', () => {
    expect(Rgy.Range(0, 4)).toEqual([0, 1, 2, 3, 4]);
    expect(Rgy.Range(3, 6)).toEqual([3, 4, 5, 6]);
    expect(Rgy.Range(-2, 0)).toEqual([-2, -1, 0]);
    expect(Rgy.Range(1, 1)).toEqual([1]);
  });

  it('generates all upper case letters', () => {
    expect(Rgy.Range('a', 'c')).toEqual(['a', 'b', 'c']);
    expect(Rgy.Range('D', 'F')).toEqual(['D', 'E', 'F']);
    expect(Rgy.Range('h', 'K')).toEqual(['h', 'i', 'j', 'k', 'H', 'I', 'J', 'K']);
  });

  it('generates all lower and upper case letters', () => {});

  it('generates all numbers', () => {});
});

describe('Rgy', () => {});
// console.log(hexMatch.test('#334400'));
// console.log(hexMatch.test('#ffaacc'));
// console.log(hexMatch.test('#FFaaCC'));
// console.log(hexMatch.test('#Ff1c0s'));

// hex color
// // ex: \#([a-fA-F]|[0-9]){3, 6}
// const hexMatch = Rgy([Start, { exactly: '#' }, { any: [Numbers, Range('a', 'f')], minimum: 3, maximum: 6 }, End]);

// Rgy([
//   Start,
//   { any: Range(0, 255), minimum: 1, maximum: 3 },
//   { exactly: '-', length: 1 },
//   { any: Range(0, 255), minimum: 1, maximum: 3 },
//   { exactly: '-', length: 1 },
//   { any: Range(0, 255), minimum: 1, maximum: 3 },
//   End
// ]);
