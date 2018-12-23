/**
 * @module Constants
 */

/**
 * @constant {Symbol} Start Denotes the start of a line to be parsed
 */
const Start = Symbol('Start');

/**
 * @constant {Symbol} End Denotes the end of a line to be parsed
 */
const End = Symbol('End');

/**
 * @constant {String[]} Numbers Positive integer set 0-9
 */
const Numbers = '0123456789'.split('');

/**
 * @constant {String[]} LowerLetters Alphabet, lowercase
 */
const LowerLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');

/**
 * @constant {String[]} LowerLetters Alphabet, uppercase
 */
const UpperLetters = UpperLetters.map(s => s.toUpperCase());

/**
 * @constant {String[]} Letters Alphabet, lowercase and uppcase combined
 */
const Letters = [...LowerLetters, ...UpperLetters];

/**
 * @constant {Array} AlphaNumeric Alphabet, lowercase, uppercase, and numbers combined
 */
const AlphaNumeric = [...Letters, ...Numbers];

/**
 * @constant {String[]} Quote Single and double quote
 */
const Quote = ['"', '\''];

export { Start, End, Numbers, LowerLetters, UpperLetters, Letters, AlphaNumeric, Quote };
