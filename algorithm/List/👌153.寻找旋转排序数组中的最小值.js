/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
	if (nums.length === 1) return nums[0];
	let mid = Math.floor(nums.length / 2);
	if (nums[0] <= nums[mid]) {
		return findMin([nums[0], ...nums.slice(mid + 1)]);
	} else {
		return findMin([...nums.slice(1, mid), nums[mid]]);
	}
};
var findMin = function (nums) {
	let l = 0,
		r = nums.length - 1;
	while (l < r) {
		const mid = Math.floor(l + (r - l) / 2);
		if (nums[mid] > nums[r]) {
			l = mid + 1;
		} else {
			//在左侧
			r = mid;
		}
	}
	return nums[l];
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = findMin;
// @after-stub-for-debug-end
