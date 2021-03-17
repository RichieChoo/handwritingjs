/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

/*
状态：
天数    持有状态（持有、不持有）
i       1 or 0
状态转移方程：
dp[i][k][0] = max(dp[i-1][k][0],dp[i-1][k][1]+prices[i])
dp[i][k][1] = max(dp[i-1][k][1],dp[i-1][k][0]-prices[i])
base case:
dp[-1][0] = 0
dp[-1][1] = -Infinity

k为正无穷，意味着不必记录k了
*/
// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let dp_i_0 = 0,
		dp_i_1 = -Infinity;
	for (let i = 0; i < prices.length; i++) {
		let temp = dp_i_0;
		dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
		dp_i_1 = Math.max(dp_i_1, temp - prices[i]);
	}
	return dp_i_0;
};
// @lc code=end
