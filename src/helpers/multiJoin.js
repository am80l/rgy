import clean from './clean';

/**
 * Flattens all arrays into one. Converts every item in the array to a string.
 * Cleans each item in the array. Joins each item in the array with a '|'.
 *
 * @param {Array | String | Number} joinable Any item(s) to join.
 * @returns {String} Joined joinable.
 */
const multiJoin = joinable => {
  // string or a number, just return it as a string
  if (typeof joinable === 'string' || typeof joinable === 'number') return clean(joinable.toString());

  // as an array
  if (Array.isArray(joinable)) {
    let multiJoined = joinable.reduce((joined, item) => {
      return [...joined, multiJoin(item)];
    }, []);

    return multiJoined.join('|');
  }

  // nothing else should be inside joinable
  throw Error('{ joinable } only accepts strings, numbers, and arrays.');
};

module.exports = multiJoin;
