const rgyTest = parsedRuleSet => source => RegExp(parsedRuleSet).test(source);

module.exports = rgyTest;
