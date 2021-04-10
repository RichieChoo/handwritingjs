function uniqueArray(arr) {
	return [...new Set(arr)];
}
function uniqueArray2(arr) {
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		const c = arr[i];
		if (!res.includes(c)) {
			res.push(c);
		}
	}
	return res;
}
function uniqueArray3(arr) {
	return arr.filter((v, p, array) => array.indexOf(v) === p);
}
let arr = [13, 4, 5, 2, 5, 21, 2, 4, 2, 1, 2];
console.log(uniqueArray(arr))
console.log(uniqueArray2(arr))
console.log(uniqueArray3(arr))
