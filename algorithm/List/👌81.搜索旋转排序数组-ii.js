/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
	let l = 0,
		r = nums.length - 1;
	while (l <= r) {
		let mid = Math.floor(l + (r - l) / 2);
		if (nums[mid] === target) return true;
		if (nums[l] === nums[mid]) {
			l++;
			continue;
		}
		if (nums[l] < nums[mid]) {
			if (nums[l] <= target && target <= nums[mid]) {
				r = mid - 1;
			} else {
				l = mid + 1;
			}
		} else {
			if (nums[mid] <= target && target <= nums[r]) {
				l = mid + 1;
			} else {
				r = mid - 1;
			}
		}
	}
	return false;
};
// @lc code=end
