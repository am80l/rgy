const rgyMatch = parsedRuleSet => match => source => source.match(RegExp(parsedRuleSet));

modules.exports = rgyMatch;
