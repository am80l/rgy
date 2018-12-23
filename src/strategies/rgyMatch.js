/* eslint-disable no-unused-vars */

const rgyMatch = parsedRuleSet => match => source =>
  source.match(RegExp(parsedRuleSet));

module.exports = rgyMatch;
