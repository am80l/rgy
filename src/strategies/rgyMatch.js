const rgyMatch = parsedRuleSet => match => source => source.match(RegExp(parsedRuleSet));

module.exports = rgyMatch;
