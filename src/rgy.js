const multiJoin = require('./helpers/multiJoin');
const { Start, End } = require('./helpers/constants');
const rgyTest = require('./strategies/rgyTest');
const rgyReplace = require('./strategies/rgyReplace');
const rgyMatch = require('./strategies/rgyMatch');

/**
 * Parse Rule
 * 
 * 
 * @param {String} parsedRule The string to be converted to regex being built up
 * @param {Object | Symbol} rule The rule to enforce.
 */
const parseRule = (parsedRule, rule = {}) => {
	// case: start
	if (rule === Start) return parsedRule + '^';

	// case: end
	if (rule === End) return parsedRule + '$';

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
		debug: () => parsedRuleSet
	};
};

module.exports = Rgy;
