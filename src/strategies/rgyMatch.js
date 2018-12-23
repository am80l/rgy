const rgyMatch = parsedRuleSet => source => {
  return source.match(RegExp(parsedRuleSet, 'gm'));
};

export default rgyMatch;
