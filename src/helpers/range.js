const { LowerLetters, UpperLetters } = require('./constants');

const Range = (first, last) => {
	// alphabetical range
	if (typeof first === 'string' && typeof last === 'string') {
		if (first === first.toLowerCase() && last == last.toLowerCase()) {
			// lower case set
			let start = LowerLetters.indexOf(first);
			let stop = LowerLetters.indexOf(last);			
			if (stop < start) {
				//we need all letters between last and (z|Z)  && all letters between (a|A) and start
				return [
					Range(start, 'z'),
					Range('a', stop)
				];
			}			

			return LowerLetters.slice(start, stop+1);
		// uppercase
		} else if (first === first.toUpperCase() && last == last.toUpperCase()) {
			// upper case set
			let start = UpperLetters.indexOf(first);
			let stop = UpperLetters.indexOf(last);			
			if (stop < start) {
				//we need all letters between last and (z|Z)  && all letters between (a|A) and start
				return [
					...Range(start, 'Z'),
					...Range('A', stop)
				];
			}			

			return UpperLetters.slice(start, stop+1);			
		} else {
			// both
			return [
				...Range(first.toLowerCase(), last.toLowerCase()),
				...Range(first.toUpperCase(), last.toUpperCase())
			];
		}
	} else if (Number.isInteger(first) && Number.isInteger(last)) {
		// numerical range
		let numbers = [];

		// build range
		for (let i = first; i <= last; i++) numbers.push(i);

		// return range
		return numbers;
	}
};

module.exports = Range;
