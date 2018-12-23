/**
 * @module Helpers
 */

/**
 * Clean
 * 
 * Cleans a string by escaping characters that regex may interpret as rules.
 * 
 * @param {string} str string to clean.
 * @returns {string} returns a clean string.
 */
const clean = str => {
  const badCharacters = '.?:[]()!^$*+\\/'
    .split('')
    .map(s => `\\${s}`)
    .join('|');

  return str.replace(RegExp(`(${badCharacters})`, 'g'), '\\$1');
};

// export
export default clean;
