/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	//第一次 买入， 卖出的利润
	let [profitOut, profitIn] = [0, -prices[0]];

	//继第一次之后，第二次买入卖出的利润
	let profitOut2 = 0;
	let profitIn2 = -prices[0];
	for (const p of prices) {
		profitOut2 = Math.max(profitOut2, profitIn2 + p);
		profitIn2 = Math.max(profitIn2, profitOut - p);
		profitOut = Math.max(profitOut, profitIn + p);
		profitIn = Math.max(profitIn, -p);
	}
	return profitOut2;
};
// @lc code=end
