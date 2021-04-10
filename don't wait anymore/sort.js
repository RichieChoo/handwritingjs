function bubbleSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	return arr;
}
function selectionSort(arr) {
	let minIndex, temp;
	for (let i = 0; i < arr.length; i++) {
		minIndex = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) minIndex = j;
		}
		[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
	}
	return arr;
}

function insertSort(arr) {
	let preIndex, cur;
	for (let i = 1; i < arr.length; i++) {
		preIndex = i - 1;
		cur = arr[i];
		while (preIndex >= 0 && arr[preIndex] > cur) {
			arr[preIndex + 1] = arr[preIndex];
			preIndex--;
		}
		arr[preIndex + 1] = cur;
	}
	return arr;
}

function mergeSort(arr) {
	if (arr.length < 2) return arr;
	function merge(arr1, arr2) {
		let res = [];
		let l = 0,
			r = 0;
		while (l < arr1.length && r < arr2.length) {
			if (arr1[l] < arr2[r]) {
				res.push(arr1[l++]);
			} else {
				res.push(arr2[r++]);
			}
		}
		return res.concat(arr1.slice(l).concat(arr2.slice(r)));
	}
	let mid = Math.floor(arr.length / 2);
	let arr1 = arr.slice(0, mid);
	let arr2 = arr.slice(mid);
	return merge(mergeSort(arr1), mergeSort(arr2));
}

function quickSort(arr) {
	function _quickSort(arr, left, right) {
		let pIndex;
		if (left < right) {
			pIndex = partition(arr, left, right);
			_quickSort(arr, left, pIndex - 1);
			_quickSort(arr, pIndex + 1, right);
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
	function swap(arr, i, j) {
		if (i !== j) {
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
	}
	return _quickSort(arr, 0, arr.length - 1);
}

const arr = [23, 1, 2, 13, 5, 2, 5, 256, 1];
const sortByBubble = bubbleSort(arr.slice());
const sortBySelection = selectionSort(arr.slice());
const sortByMerge = mergeSort(arr.slice());
const sortByQuick = quickSort(arr.slice());
console.log(sortByQuick);
console.log("done");
