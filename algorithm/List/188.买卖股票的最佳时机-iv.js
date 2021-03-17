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
	if (k > n / 2) {
		let [profitOut, profitIn] = [0, -prices[0]];
		for (const p of prices) {
			profitOut = Math.max(profitOut, profitIn + p);
			profitIn = Math.max(profitIn, profitOut - p);
		}
		return profitOut;
	}
	let profit = Array.from({ length: k + 1 }, (v, p) => ({
		//初始化买入卖出时的利润
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
};
// @lc code=end
