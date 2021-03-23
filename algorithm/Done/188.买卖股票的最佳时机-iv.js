/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
	let n = prices.length;
	if (!n) return 0;
	if (k > n / 2) {
		let [profitOut, profitIn] = [0, -prices[0]];
		for (const p of prices) {
			profitOut = Math.max(profitOut, profitIn + p);
			profitIn = Math.max(profitIn, profitOut - p);
		}
		return profitOut;
	} else {
		let dp = Array.from({ length: k + 1 }, () => ({
			out: 0,
			in: -prices[0],
		}));

		for (const p of prices) {
			for (let i = 1; i < dp.length; i++) {
				dp[i] = {
					out: Math.max(dp[i].out, dp[i].in + p),
					in: Math.max(dp[i].in, dp[i - 1].out - p),
				};
			}
		}
		return dp[k].out;
	}
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxProfit;
// @after-stub-for-debug-end
