/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let res = 0;
	for (let i = 1; i < prices.length; i++) {
		const p = prices[i] - prices[i - 1];
		if (p > 0) {
			res += p;
		}
	}
	return res;
};
// @lc code=end
