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
	let max = 0;
	for (let i = 1; i < prices.length; i++) {
		let dif = prices[i] - prices[i - 1];
		if (dif > 0) {
			max += dif;
		}
	}
	return max;
};

// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxProfit;
// @after-stub-for-debug-end
