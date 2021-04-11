/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
	let start, end;
	let [l, r] = [0, nums.length - 1];
	while (l < r) {
		let mid = Math.floor((l + r) / 2);
		nums[mid] >= target ? (r = mid) : (l = mid + 1);
	}
	if (nums[l] !== target) return [-1, -1];
	start = l;
	r = nums.length - 1;
	while (l < r) {
		let mid = Math.floor((l + r) / 2);
		nums[mid] <= target ? (l = mid + 1) : (r = mid);
	}
	end = nums[l] === target ? l : l - 1;
	return [start, end];
};
// @lc code=end
