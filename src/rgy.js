const { Start, End } = require('./helpers/constants');

const rgyMatch = parsedRuleSet => match => {};

const rgyReplace = parsedRuleSet => replace => {};

const rgyTest = parsedRuleSet => test => RegExp(parsedRuleSet).test(test);

const clean = str => {
  const badCharacters = '.?:[]()!^$*+\\'
    .split('')
    .map(s => `\\${s}`)
    .join('|');

  return str.replace(RegExp(`(${badCharacters})`, 'g'), '\\$1');
};

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

const parseRule = (parsedRule, rule = {}) => {
  // case: start
  if (rule === Start) return parsedRule + '^';

  // case: end
  if (rule === End) return parsedRule + '$';

  // @TODO: Sanitize string, none of the rules should have

  // parse: positive matches
  if (rule.any) parsedRule += `[${multiJoin(rule.any)}]`;

  // parse: minimum, maximum
  if (rule.minimum || rule.maximum) parsedRule += `{${rule.minimum},${rule.maximum}}`;

  // parse: length
  if (rule.length && !rule.minimum && !rule.match) parsedRule += `{${rule.length}}`;

  // parse: group
  if (rule.group) parsedRule = `(${parsedRule})`;

  // done
  return parsedRule;
};

const Rgy = (rules = []) => {
  let parsedRuleSet = rules.reduce(parseRule, '');

  return {
    match: rgyMatch(parsedRuleSet),
    replace: rgyReplace(parsedRuleSet),
    test: rgyTest(parsedRuleSet),
    debug: () => parsedRuleSet,
  };
};

const Range = require('./helpers/range');

// Match: Octal
const MatchOctal = { any: Range(0, 255), minimum: 1, maximum: 3 };

// Match: Period
const MatchPeriod = { any: '.', length: 1 };

// @RGY
const RgyIPv4 = Rgy([
  Start,
  MatchOctal,
  MatchPeriod,
  MatchOctal,
  MatchPeriod,
  MatchOctal,
  MatchPeriod,
  MatchOctal,
  End,
]);

console.log(RgyIPv4.test('255.255.255.255'));
console.log(RgyIPv4.test('1.12.123.255'));
console.log(RgyIPv4.test('22.41.255'));

module.exports = Rgy;
