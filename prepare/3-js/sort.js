function swap(arr, i, j) {
	[arr[i], arr[j]] = [arr[j], arr[i]];
}
function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
			}
		}
	}
	console.log(arguments.callee.name, arr.toString());
}
function selectionSort(arr) {
	let minIndex = 0;
	for (let i = 0; i < arr.length; i++) {
		minIndex = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[minIndex] > arr[j]) {
				minIndex = j;
			}
		}
		swap(arr, i, minIndex);
	}
	console.log(arguments.callee.name, arr.toString());
}
function insertSort(arr) {
	let last, cur;
	for (let i = 1; i < arr.length; i++) {
		last = i - 1;
		cur = arr[i];
		while (last >= 0 && arr[last] > cur) {
			arr[last + 1] = arr[last--];
		}
		arr[last + 1] = cur;
	}
	console.log(arguments.callee.name, arr.toString());
}
function mergeSort(arr) {
	if (arr.length < 2) return arr;
	function merge(arr1, arr2) {
		let res = [];
		if (arr1[0] && arr2[0]) {
			if (arr1[0] < arr2[0]) {
				res.push(arr1.shift());
			} else {
				res.push(arr2.shift());
			}
		}
		return res.concat(arr1, arr2);
	}
	let mid = Math.floor(arr.length / 2);
	let arr1 = arr.slice(0, mid);
	let arr2 = arr.slice(mid);
	return merge(mergeSort(arr1), mergeSort(arr2));
}
function quickSort(arr) {
	function quick(arr, left, right) {
		if (left < right) {
			let pIndex = partition(arr, left, right);
			quick(arr, left, pIndex - 1);
			quick(arr, pIndex + 1, right);
		}
	}
	function partition(arr, left, right) {
		let pviot = left,
			index = pviot + 1;
		for (let i = index; i <= right; i++) {
			if (arr[i] < arr[pviot]) {
				swap(arr, i, index);
				index++;
			}
		}
		swap(arr, pviot, index - 1);
		return index - 1;
	}

	quick(arr, 0, arr.length - 1);
	console.log(arguments.callee.name, arr.toString());
}
function shellSort(arr) {}
const arr = [23, 1, 2, 13, 5, 2, 5, 256, 1];
bubbleSort(arr.slice());
selectionSort(arr.slice());
insertSort(arr.slice());
console.log("mergeSort", mergeSort(arr.slice()).toString());
quickSort(arr.slice());
shellSort(arr.slice());
console.log("done");
