/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
	let [profitOut, profitIn] = [0, -prices[0]];
	for (const p of prices) {
		profitOut = Math.max(profitOut, profitIn + p - fee);
		profitIn = Math.max(profitIn, profitOut - p);
	}
	return profitOut;
};
// @lc code=end
