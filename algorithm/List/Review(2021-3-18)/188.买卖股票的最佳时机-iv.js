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

/*
 dp[i][k][0] = max(dp[i-1][k][0],dp[i-1][k][1]+price)
 dp[i][k][1] = max(dp[i-1][k][1],dp[i-1][k-1]-p)
 */
var maxProfit = function (k, prices) {
	if (k > prices.length / 2) {
		let [profitOut, profitIn] = [0, -prices[0]];
		for (const p of prices) {
			profitOut = Math.max(profitOut, profitIn + p);
			profitIn = Math.max(profitIn, profitOut - p);
		}
		return profitOut;
	} else {
		let profit = Array.from({ length: k + 1 }).map(v => ({
			out: 0,
			in: -prices[0],
		}));
		for (const p of prices) {
			for (let i = 1; i <= k; i++) {
				profit[i] = {
					out: Math.max(profit[i].out, profit[i].in + p),
					in: Math.max(profit[i].in, profit[i - 1].out - p),
				};
			}
		}

		return profit[k].out;
	}
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxProfit;
// @after-stub-for-debug-end
