// helpers
const multiJoin = require('./helpers/multiJoin');
const { Start, End } = require('./helpers/constants');

// test strategies
const rgyTest = require('./strategies/rgyTest');
const rgyReplace = require('./strategies/rgyReplace');
const rgyMatch = require('./strategies/rgyMatch');

/**
 * Parses Rgy rules into partial regular expressions.
 *
 * @param {String} parsedRule The string to be converted to regex being built up
 * @param {Object | Symbol} rule The rule to enforce.
 * @returns {String} A string that represents a partial regular expression.
 */
const parseRule = (parsedRule, rule) => {
  // start
  if (rule === Start) return parsedRule + '^';

  // end
  if (rule === End) return parsedRule + '$';

  // any
  if (rule.any) {
    parsedRule += `(${multiJoin(rule.any)})`;
  }

  // minimum, maximum
  if (!rule.length && (rule.minimum || rule.maximum)) {
    parsedRule += `{${rule.minimum},${rule.maximum}}`;
  }

  // length
  if (rule.length) {
    parsedRule += `{${rule.length}}`;
  }

  // options
  if (rule.options) {
    // options
    const options = rule.options;

    // parsed options
    const parsedOptions = options.map(option => {
      // if option is an array, reduce it
      if (Array.isArray(option)) {
        return option.reduce(parseRule, '');
      }
      else {
        // if the option is a single rule, parse it
        return parseRule('', option);
      }
    });

    // join the options together with OR
    const joinedOptions = parsedOptions.join('|');

    // add parsed rule
    parsedRule += '(' + joinedOptions + ')';
  }

  // grouping
  // if (options.group) {
  //   parsedRule = '(' + parsedRule + ')';
  // }

  // done
  return parsedRule;
};

const Rgy = (rules = []) => {
  let parsedRuleSet = rules.reduce(parseRule, '');

  return {
    match: rgyMatch(parsedRuleSet),
    replace: rgyReplace(parsedRuleSet),
    test: rgyTest(parsedRuleSet),
    debug: () => console.log(parsedRuleSet),
  };
};

module.exports = Rgy;
