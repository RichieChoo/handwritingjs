function sort(arr) {
	return quickSort(arr, 0, arr.length - 1);
}
function partition() {}
function swap(arr, i, j) {
	[arr[i], arr[j]] = [arr[j], arr[i]];
}
function quickSort(arr, left, right) {
    let privot = right;

}

let arr = [3, 2, 4, 1, 5, 1, 5, 663, 32, 4, 2];
quickSort(arr);
console.log(arr);
