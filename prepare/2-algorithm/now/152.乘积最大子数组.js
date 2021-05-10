/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
	if (!nums.length) return 0;
	let dp = Array.from({ length: nums.length + 1 }).fill(-Infinity);
	dp[0] = 0;
	dp[1] = nums[0];
	for (let i = 1; i <= nums.length; i++) {
		dp[i] = Math.max(
			dp[i],
			dp[i - 1] * nums[i - 1],
			dp[i - 2] * nums[i - 2] * nums[i - 1],
			nums[i - 1],
		);
	}
	return Math.max(...dp);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxProduct;
// @after-stub-for-debug-end
