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

/*
状态：
天数    持有状态（持有、不持有）
i       1 or 0
状态转移方程：
dp[i][0] = max(dp[i-1][0],dp[i-1][1]+prices[i])
dp[i][1] = max(dp[i-1][1],0-prices[i])
base case:
dp[-1][0] = 0
dp[-1][1] = -Infinity
*/

var maxProfit = function (prices) {
	let n = prices.length;
	let dp = new Array(n).fill().map(v => new Array(2).fill(-Infinity));
	dp[0][0] = 0;
	dp[0][1] = -prices[0];
	for (let i = 1; i < n; i++) {
		dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
		dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
	}
	return dp[n - 1][0];
};
var maxProfit = function (prices) {
	let dp_i_0 = 0,
		dp_i_1 = -Infinity;
	for (let i = 1; i < prices.length; i++) {
		dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
		dp_i_1 = Math.max(dp_i_1, -prices[i]);
	}
	return dp_i_0;
};

// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxProfit;
// @after-stub-for-debug-end
