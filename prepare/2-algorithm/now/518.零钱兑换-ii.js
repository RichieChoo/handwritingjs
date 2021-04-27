/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
	let dp = new Array(amount + 1).fill(0);
	dp[0] = 1;
	for (const c of coins) {
		for (let i = 1; i <= amount; i++) {
			if (i - c >= 0) {
				dp[i] = dp[i] + dp[i - c];
			}
		}
	}
	return dp[amount];
};
// @lc code=end
