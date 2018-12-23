import clean from '../../src/helpers/clean';

const badCharacters = '.?:[]()!^$*+\\';

describe('clean', () => {
  badCharacters.split('').forEach(char => {
    it(`Escapes ${char}`, () => {
      expect(clean(char)).toEqual('\\' + char);
    });
  });
});
