import { LowerLetters, UpperLetters } from './constants';

/**
 * Range
 * 
 * Will generate a range of numbers or letters as a string.
 * 
 * @example
 * Range('a', 'd'); // returns ['a', 'b', 'c', 'd']
 * 
 * @example
 * Range('X', 'Z'); // returns ['X', 'Y', 'Z']
 * 
 * @example
 * Range('q', 'T'); // returns ['q', 'r', 's', 't', 'Q', 'R', 'S', 'T']
 * 
 * @example
 * Range(33, 36); // returns ['33', '34', '35', '36']
 * 
 * @param {Number | String} first The beginning of the range
 * @param {Number | String} last The end of the range
 * @returns {String[]} An array where each character is one item in the range
 */
const Range = (first, last) => {
  // alphabetical range
  if (typeof first === 'string' && typeof last === 'string') {
    if (first === first.toLowerCase() && last == last.toLowerCase()) {
      // lower case set
      let start = LowerLetters.indexOf(first);
      let stop = LowerLetters.indexOf(last);
      if (stop < start) {
        return [...Range(first, 'z'), ...Range('a', last)];
      }

      return LowerLetters.slice(start, stop + 1);
      // uppercase
    }
    else if (first === first.toUpperCase() && last == last.toUpperCase()) {
      // upper case set
      let start = UpperLetters.indexOf(first);
      let stop = UpperLetters.indexOf(last);
      if (stop < start) {
        return [...Range(first, 'Z'), ...Range('A', last)];
      }

      return UpperLetters.slice(start, stop + 1);
    }
    else {
      // both
      return [
        ...Range(first.toLowerCase(), last.toLowerCase()),
        ...Range(first.toUpperCase(), last.toUpperCase()),
      ];
    }
  }
  else if (Number.isInteger(first) && Number.isInteger(last)) {
    // numerical range
    let numbers = [];

    // build range
    for (let i = first; i <= last; i++) numbers.push(i);

    // return range
    return numbers;
  }
};

module.exports = Range;
