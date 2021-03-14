/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let l = 0,
		r = nums.length - 1;
	while (l <= r) {
		let mid = Math.floor(l + (r - l) / 2);
		if (nums[mid] === target) return mid;
		// 找到哪一侧为有序数组
		if (nums[l] <= nums[mid]) {
			if (nums[l] <= target && target <= nums[mid]) {
				// target is in the left
				r = mid - 1;
			} else {
				// target is in the right
				l = mid + 1;
			}
		} else {
			if (nums[mid] <= target && target <= nums[r]) {
				// target is in the right
				l = mid + 1;
			} else {
				// target is in the left
				r = mid - 1;
			}
		}
	}
	return -1;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = search;
// @after-stub-for-debug-end
