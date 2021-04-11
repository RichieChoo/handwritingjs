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
function shellSort(arr) {
	gap = Math.floor(arr.length / 2);
	while (gap) {
		for (let i = gap; i < arr.length; i++) {
			let temp = arr[i],
				j;
			for (j = i - gap; j >= 0 && temp < arr[j]; j -= gap) {
				arr[j + gap] = arr[j];
			}
			arr[j + gap] = temp;
		}
		gap = Math.floor(gap / 2);
	}
	console.log(arguments.callee.name, arr.toString());
}
function heapSort(arr) {
	function maxHeapify(arr, i, size) {
		let largest = i,
			l = 2 * i + 1,
			r = 2 * i + 2; // 左子节点为2i + 1，右子节点为2i + 2
		// 若子节点比节点大，则标记
		if (l <= size && arr[l] > arr[largest]) {
			largest = l;
		}
		if (r <= size && arr[r] > arr[largest]) {
			largest = r;
		}
		// 若标记有子节点，则交换父子位置，并递归计算
		if (largest !== i) {
			swap(arr, i, largest);
			maxHeapify(arr, largest, size);
		}
	}

	let len = arr.length;
	if (len <= 1) return arr;
	// 建堆
	for (let i = Math.floor(len / 2); i >= 0; i--) {
		maxHeapify(arr, i, len);
	}
	// 堆排序
	for (let j = 0; j < len; j++) {
		swap(arr, 0, len - 1 - j);
		maxHeapify(arr, 0, len - 2 - j);
	}
	return arr;
}
const arr = [23, 1, 2, 13, 5, 2, 5, 256, 1];
bubbleSort(arr.slice());
selectionSort(arr.slice());
insertSort(arr.slice());
console.log("mergeSort", mergeSort(arr.slice()).toString());
quickSort(arr.slice());
shellSort(arr.slice());
console.log("heapSort", heapSort(arr.slice()).toString());
console.log("done");
