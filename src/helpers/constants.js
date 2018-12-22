const Start = Symbol('Start');
const End = Symbol('End');
const Numbers = '0123456789'.split('');
const LowerLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
const UpperLetters = LowerLetters.map(s => s.toUpperCase());
const Letters = [...LowerLetters, ...UpperLetters];
const AlphaNumeric = [...Letters, ...Numbers];

module.exports = {
	Start,
	End,
	Numbers,
	LowerLetters,
	UpperLetters,
	Letters,
	AlphaNumeric
};
