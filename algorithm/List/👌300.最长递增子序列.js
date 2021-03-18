/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
dp[i] 表示以 nums[i] 这个数结尾的最长递增子序列的长度。

*/
var lengthOfLIS = function (nums) {
	if (!nums.length) return 0;
	let dp = new Array(nums.length).fill(1);
	for (let i = 1; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[j] < nums[i]) {
				dp[i] = Math.max(dp[i], dp[j] + 1);
			}
		}
	}
	return Math.max(...dp);
};
// @lc code=end
