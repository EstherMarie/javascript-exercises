const reverseString = function (array) {
	let reverseArray = [];
	for (let i = array.length; i >= 0; i--) {
		reverseArray.push(array[i]);
	}
	return reverseArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
