const clean = str => {
	const badCharacters = '.?:[]()!^$*+\\'
		.split('')
		.map(s => `\\${s}`)
		.join('|');

	return str.replace(RegExp(`(${badCharacters})`, 'g'), '\\$1');
};

module.exports = clean;
