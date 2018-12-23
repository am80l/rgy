const Rgy = require('../../src/rgy');
const { Start, End, Numbers } = require('../../src/helpers/constants.js');
const Range = require('../../src/helpers/range');

/*
  Subject: Source of an Image Tag

  - RegEx -
  /^<\s*img[^>]+src\s*=\s*(["'])(.*?)\1[^>]*>$/

  - Matches -
  <img src="file.jpg"  />
*/

const RgyImageSrc = Rgy([
  Start,
  { any: '<', length: 1 },
  { any: ' ' },
  { any: 'src', length: 3 },
  { any: ' ' },
  // { any: Quote, length: 1 },
  // { any: URLSafeCharacter, group: true },
  // { any: Quote, length: 1 },
  // { any: Any },
  { any: ['/>', '>'] },
  End,
]);

describe('Case Study: Date', () => {
  it('--- is ready to be written ---', () => {
    expect(true).toEqual(true);
  });
});
