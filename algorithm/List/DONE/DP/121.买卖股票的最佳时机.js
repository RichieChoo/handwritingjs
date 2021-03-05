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
	let res = 0;
	if (prices.length < 2) return res;
	let [min, max] = [prices[0], prices[0]];
	for (let i = 1; i < prices.length; i++) {
		if (prices[i] < min) {
			min = prices[i];
			max = prices[i];
		} else if (max < prices[i]) {
			max = prices[i];
			if (max > min && res < max - min) {
				res = max - min;
			}
		}
	}
	return res;
};
var maxProfit = function (prices) {
	var min = Number.MAX_SAFE_INTEGER;
	var max = 0;
	for (var i = 0; i < prices.length; i++) {
		min = Math.min(min, prices[i]);
		max = Math.max(max, prices[i] - min);
	}
	return max;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxProfit;
// @after-stub-for-debug-end
