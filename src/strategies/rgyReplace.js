const rgyReplace = parsedRuleSet => (source, repl) => source.replace(RegExp(parsedRuleSet, 'g'), repl);

module.exports = rgyReplace;
