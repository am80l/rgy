const { LowerLetters, UpperLetters } = require("./constants");

const Range = (first, last) => {
  // alphabetical range
  if (typeof first === "string" && typeof last === "string") {
    // lower case set
    if (first === first.toLowerCase() && last == last.toLowerCase()) {
      let start = LowerLetters.indexOf(first);
      let stop = LowerLetters.indexOf(last);

      return LowerLetters.slice(start, stop + 1);
    } else if (first === first.toUpperCase() && last == last.toUpperCase()) {
      // upper case set
      let start = UpperLetters.indexOf(first);
      let stop = UpperLetters.indexOf(last);

      return UpperLetters.slice(start, stop + 1);
    } else {
      // both
      return [
        ...Range(first.toLowerCase(), last.toLowerCase()),
        ...Range(first.toUpperCase(), last.toUpperCase())
      ];
    }
  } else if (Number.isInteger(first) && Number.isInteger(last)) {
    // numerical range
    let numbers = [];

    // build range
    for (let i = first; i <= last; i++) numbers.push(i);

    // return range
    return numbers;
  }
};

module.exports = Range;
