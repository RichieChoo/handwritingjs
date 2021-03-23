/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let [profitOut, profitIn] = [0, -prices[0]];
	let frezze = 0;
	for (const p of prices) {
		let temp = profitOut;
		profitOut = Math.max(profitOut, profitIn + p);
		profitIn = Math.max(profitIn, frezze - p);
        frezze = temp;

	}
	return profitOut;
};
// @lc code=end
