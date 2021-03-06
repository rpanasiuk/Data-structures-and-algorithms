// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < (arr.length - 1 - i); j++) {
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

// function bubbleSort(arr) {
// 	let n = arr.length;
// 	while (n > 1) {
// 		for (i = 1; i < n; i++) {
// 			if (arr[i] < arr[i-1]) {
// 				var x = arr[i];
// 				arr[i] = arr[i-1]
// 				arr[i-1] = x;			
// 			};
// 		};
// 		n = n - 1;		
// 	};
// 	return arr;
// };

function selectionSort(arr) {
	
	for (let i = 0; i < arr.length; i++) {
		let minVal = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minVal]) {
				minVal = j;
			}
		}
		if (i !== minVal) {
			let temp = arr[i];
			arr[i] = arr[minVal];
			arr[minVal] = temp;
		}
	}
	return arr;
}

function mergeSort(arr) {
	if (arr.length == 1) {
		return arr;
	}

	var center = Math.floor(arr.length / 2);
	var left = arr.slice(0, center);
	var right = arr.slice(center);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	const result = [];

	while (left.length && right.length) {
		if (left[0] < right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}
	return [...result, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort };
