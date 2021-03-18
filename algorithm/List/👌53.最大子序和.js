/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
	if (nums.length === 0) return 0;
	let dp = new Array(nums.length).fill(-Infinity);
	dp[0] = nums[0];
	for (let i = 1; i < nums.length; i++) {
		dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
	}
	return Math.max(...dp);
};

var maxSubArray = function (nums) {
	let pre = 0,
		max = -Infinity;
	for (let i = 0; i < nums.length; i++) {
		pre = Math.max(nums[i], pre + nums[i]);
		max = Math.max(pre, max);
	}
	return max;
};

// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxSubArray;
// @after-stub-for-debug-end
