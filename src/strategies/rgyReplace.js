const rgyReplace = parsedRuleSet => (source, repl) => source.replace(RegExp(parsedRuleSet, 'gm'), repl);

module.exports = rgyReplace;
