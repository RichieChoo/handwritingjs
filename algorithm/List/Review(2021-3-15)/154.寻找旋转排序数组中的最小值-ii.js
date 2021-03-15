/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
	let l = 0,
		r = nums.length - 1;
	while (l < r) {
        let mid = l + ((r - l) >> 1);
        // 通过右边界和中点判断
		if (nums[r] === nums[mid]) {
			r--;
		} else if (nums[r] > nums[mid]) {
			r = mid;
		} else {
			l = mid + 1;
		}
	}
	return nums[l];
};
// @lc code=end
