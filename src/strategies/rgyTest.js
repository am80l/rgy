const rgyTest = parsedRuleSet => source => RegExp(parsedRuleSet).test(s);

module.exports = rgyTest;
