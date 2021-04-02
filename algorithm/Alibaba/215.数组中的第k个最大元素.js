/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
	quickSort(nums, 0, nums.length - 1,k);

	return nums[k - 1];
};
function quickSort(nums, left, right,k) {
	let pIndex;
	if(k)
	if (left < right) {
		pIndex = partition(nums, left, right);
		quickSort(nums, left, pIndex - 1,k);
		quickSort(nums, pIndex + 1, right,k);
	}
}
function partition(nums, left, right) {
	let pivot = left;
	let index = pivot + 1;
	for (let i = index; i <= right; i++) {
		if (nums[i] > nums[pivot]) {
			swap(nums, i, index);
			index++;
		}
	}
	swap(nums, pivot, index - 1);
	return index - 1;
}
function swap(nums, i, j) {
	if (i === j) return;
	[nums[i], nums[j]] = [nums[j], nums[i]];
}
// @lc code=end

// @after-stub-for-debug-begin
module.exports = findKthLargest;
// @after-stub-for-debug-end
