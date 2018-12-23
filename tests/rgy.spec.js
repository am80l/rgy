import require from '../src/helpers/range';

describe('Range', () => {
  // tests base functionality of the range
  it('generates numbers all numbers between start and end', () => {
    expect(Range(0, 4)).toEqual([0, 1, 2, 3, 4]);
    expect(Range(3, 6)).toEqual([3, 4, 5, 6]);
    expect(Range(-2, 0)).toEqual([-2, -1, 0]);
    expect(Range(1, 1)).toEqual([1]);
  });

  // tests base functionality of the range
  it('generates all lowercase letters between start and end', () => {
    expect(Range('a', 'c')).toEqual(['a', 'b', 'c']);
    expect(Range('h', 'K')).toEqual(['h', 'i', 'j', 'k', 'H', 'I', 'J', 'K']);
    //expect(Rgy.Range('z', 'b')).toEqual(['z', 'a', 'b'])
  });

  // tests base functionality of the range
  it('generates all uppercase letters between start and end', () => {
    expect(Range('D', 'F')).toEqual(['D', 'E', 'F']);
    expect(Range('A', 'I')).toEqual([
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
    ]);
    //expect(Rgy.Range('Z', 'B')).toEqual(['Z', 'A', 'B'])
    expect(Range('X', 'Z')).toEqual(['X', 'Y', 'Z']);
  });

  // tests base functionality of the range
  it('generates all letters between start and end', () => {
    expect(Range('d', 'F')).toEqual(['d', 'e', 'f', 'D', 'E', 'F']);
    expect(Range('a', 'I')).toEqual([
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
    ]);
    //expect(Rgy.Range('z', 'B')).toEqual(['z', 'Z', 'a', 'A','b', 'B'])
    expect(Range('x', 'Z')).toEqual(['x', 'y', 'z', 'X', 'Y', 'Z']);
  });
});

// describe('Rgy', () => {});
// console.log(hexMatch.test('#334400'));
// console.log(hexMatch.test('#ffaacc'));
// console.log(hexMatch.test('#Ff1c0s'));
// console.log(hexMatch.test('#FFaaCC'));

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
