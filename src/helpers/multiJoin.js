const clean = require('./clean');

const multiJoin = any => {
  // string or a number, just return it as a string
  if (typeof any === 'string' || typeof any === 'number') return clean(any.toString());

  // as an array
  if (Array.isArray(any)) {
    let multiJoined = any.reduce((joined, item) => {
      return [...joined, multiJoin(item)];
    }, []);

    return multiJoined.join('|');
  }

  // nothing else should be inside any
  throw Error('{ any } only accepts strings, numbers, and arrays.');
};

module.exports = multiJoin;
