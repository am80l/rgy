const Range = (first, last) => {
  // alphabetical range
  if (typeof first === 'string' && typeof last === 'string') {
    // lower case set
    if (first === first.toLowerCase() && last == last.toLowerCase()) {
      let start = LowerLetters.indexOf(first);
      let stop = LowerLetters.indexOf(last);

      return LowerLetters.slice(start, stop);
    }
    else if (first === first.toUpperCase() && last == last.toUpperCase()) {
      // upper case set
      let start = UpperLetters.indexOf(first);
      let stop = UpperLetters.indexOf(last);

      return UpperLetters.slice(start, stop);
    }
    else {
      // both
      return [
        ...Range(first.toLowerCase(), last.toLowerCase()),
        ...Range(first.toUpperCase(), last.toUpperCase())
      ];
    }
  }
  else if (Number.isInteger(first) && Number.isInteger(last)) {
    // numerical range
    let numbers = [];

    // build range
    for (let i = first; i <= last; i++) numbers.push(first + i);

    // return range
    return numbers;
  }
};

const Start = Symbol('Start of Expression');
const End = Symbol('End of Expression');
const Numbers = '0123456789'.split('');
const LowerLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
const UpperLetters = LowerLetters.map(l => l.toUpperCase());
const Letters = [...LowerLetters, ...UpperLetters];
const AlphaNumeric = [...Numbers, ...Letters];

const parseRules = (exp, rule) => {
  if (rule === Start) return (exp += '^');
  if (rule === End) return (exp += '$');

  const { any, minimum, maximum, length, exactly, group } = rule;

  let ruleFragment = '';

  // match characters
  if (any) {
    ruleFragment += `[${any.join('|')}]`;
  }
  else if (exactly) {
    ruleFragment += exactly;
  }

  // match length
  if (length) {
    ruleFragment += `{${length}}`;
  }
  else if (minimum && maximum) {
    ruleFragment += `{${minimum},${maximum}}`;
  }
  else if (minimum) {
    ruleFragment += `{${minimum},}`;
  }
  else if (maximum) {
    ruleFragment += `{,${maximum}}`;
  }

  // group
  if (group) {
    ruleFragment = `(${ruleFragment})`;
  }

  return ruleFragment;
};

const Rgy = rules => {
  let exp = rules.reduce(parseRules, '');
  // console.log(exp);

  return {
    match: () => {},
    replace: () => {},
    test: s => RegExp(exp).test(s)
  };
};

Rgy.Range = Range;

module.exports = Rgy;
