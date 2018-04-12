// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> FALSE
//   anagrams('Hi there', 'Bye there') --> False

// function charsMap(str) {
// 	const str_ = str.replace(' ', '');
// 	let charMap = {};
// 	for (let char of str_) {
// 		charMap[char] = charMap[char] + 1 || 1;
// 	};
// 	return charMap;
// }

// function anagrams(stringA, stringB) {
// 	const charMapA = charsMap(stringA);
// 	const charMapB = charsMap(stringB);
// 	if (Object.keys(charMapA).length === Object.keys(charMapB).length) {
// 		for (let char in charMapA) {
// 			// debugger;
// 			if (charMapA[char] !== charMapB[char]) {
// 				return false;
// 			};
// 		};
// 	} else {
// 		return false;
// 	};
// 	return true;
// }

function anagrams(stringA, stringB) {
	return cleanString(stringA) === cleanString(stringB);
};

function cleanString(str) {
	return str.replace(/[^\w]/g, '').split('').sort().join('');
};
// charsMap('BYE there');
// charsMap('bye there');
// anagrams('BYE there', 'bye there');
module.exports = anagrams;
