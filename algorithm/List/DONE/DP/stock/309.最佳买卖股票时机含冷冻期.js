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

/*
1. 定义状态转移方程
定义二维数组 dp[n][3]:
dp[i][0] 持有股票，表示第 i 天不持有可获得的最大利润；
dp[i][1] 不持有，冷冻期。
dp[i][2] 不持有，不冷冻
2. 定义状态转移方程：
dp[i][0] = max(dp[i - 1][0], dp[i - 1][2] + prices[i])
dp[i][1] = dp[i-1][0]+prices[i]
dp[i][2] = max(dp[i-1][1],dp[i-1][2])
*/
var maxProfit = function (prices) {
	let n = prices.length;
	if (n === 0) return 0;
	let dp = new Array(n).fill(0);
	dp = dp.map(v => new Array(3).fill(0));
	dp[0][0] = -prices[0];
	for (let i = 1; i < n; i++) {
		dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i]);
		dp[i][1] = dp[i - 1][0] + prices[i];
		dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2]);
	}
	return Math.max(dp[n - 1][1], dp[n - 1][2]);
};
// @lc code=end
