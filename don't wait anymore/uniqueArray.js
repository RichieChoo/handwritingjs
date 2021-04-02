/* 数组去重 */

function uniqueArray(arr) {
	return [...new Set(arr)];
}


function uniqueArray2(arr) {
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		const c = arr[i];
		if (res.indexOf(c) === -1) {
			res.push(c);
		}
	}
	return res;
}
let array = [11, 3, 2, 1, 3, 4, 2, 1, 4, 5, 2, 22];

console.log(uniqueArray(array));
console.log(uniqueArray2(array));
