/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let [profitOut, profitIn] = [0, -prices[0]];
	for (const p of prices) {
		profitOut = Math.max(profitOut, profitIn + p);
		profitIn = Math.max(profitIn, -p);
	}
	return profitOut
};
// @lc code=end
