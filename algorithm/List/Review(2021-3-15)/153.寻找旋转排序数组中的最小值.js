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
	let l = 0,
		r = nums.length - 1;
	while (l < r) {
		let mid = l + ((r - l) >> 1);
		if (nums[r] > nums[mid]) {
			r = mid;
		} else {
			l = mid + 1;
		}
	}
	return nums[l];
};

var findMin = function (nums) {
	if (nums.length === 1) return nums[0];
	let mid = Math.floor(nums.length / 2);
	if (nums[0] > nums[mid]) {
		return findMin([...nums.slice(1, mid + 1)]);
	} else {
		return findMin([nums[0], ...nums.slice(mid + 1)]);
	}
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = findMin;
// @after-stub-for-debug-end
