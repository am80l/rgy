const clean = require('../../src/helpers/clean');

describe('clean', () => {
  // tests base functionality of the range
  it('Escapes "?"', () => {
    expect(clean('?')).toEqual('\\?');
  });
});
