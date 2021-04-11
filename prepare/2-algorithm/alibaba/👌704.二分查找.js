/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	if (!nums.length) return -1;
	let [l, r] = [0, nums.length - 1];
	while (l <= r) {
		let mid = Math.floor(l + (r - l) / 2);
		if (nums[mid] === target) {
			return mid;
		} else if (nums[mid] > target) {
			r = mid - 1;
		} else {
			l = mid + 1;
		}
	}
	return -1;
};
// @lc code=end
