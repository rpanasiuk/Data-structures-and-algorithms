// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
// 	const capitalized = [];
// 	for (let char of str.split(' ')) {
// 		let upper_char = char[0].toUpperCase();
// 		capitalized.push(upper_char + char.slice(1));
// 	};
// 	return capitalized.join(' ');
// }

function capitalize(str) {
	var capQuestionMark = capitalQuestionMark(str);
	let capitalized = capQuestionMark[0];
	const iter_start = capQuestionMark[1];
	// debugger;
	for (let i = iter_start; i < str.length; i++) {
		if (str[i - 1] == ' ') {
			capitalized += str[i].toUpperCase();
		} else {
			capitalized += str[i];
		};
	};
	return capitalized;
}

function capitalQuestionMark(str) {
	if (str[0] === '?') {
		const capitalized = str[0] + str[1].toUpperCase();
		const iter_start = 2;
		return [capitalized, iter_start];
	} else {
		const capitalized = str[0].toUpperCase();
		const iter_start = 1;
		return [capitalized, iter_start];
	};
}
// capitalQuestionMark('?que pasa')
// capitalize('?que pasa')
module.exports = capitalize;
