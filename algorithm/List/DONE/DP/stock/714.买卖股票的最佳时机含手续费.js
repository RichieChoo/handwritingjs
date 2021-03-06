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

/*
1. 定义状态转移方程
定义二维数组 dp[n][2]:
dp[i][0] 表示第 i 天不持有可获得的最大利润；
dp[i][1] 表示第 i 天持有可获得的最大利润（注意是第 i 天持有，而不是第 i 天买入）。
2. 定义状态转移方程：
不持有：dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee)
对于今天不持有，可以从两个状态转移过来：1. 昨天也不持有；2. 昨天持有，今天卖出。两者取较大值。

持有：dp[i][1] = max(dp[i - 1][1], dp[i - 1][0] - prices[i])
对于今天持有，可以从两个状态转移过来：1. 昨天也持有；2. 昨天不持有，今天买入。两者取较大值。
*/

var maxProfit = function (prices, fee) {
	let n = prices.length;
	let dp = new Array(n).fill(0);
	dp = dp.map(v => new Array(2).fill(0));
	dp[0][0] = 0;
	dp[0][1] = -prices[0];
	for (let i = 1; i < n; i++) {
		dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
		dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
	}
	return dp[n - 1][0];
};

var maxProfit = function (prices, fee) {
	let [dp0, dp1] = [0, -prices[0]];
	for (let i = 0; i < prices.length; i++) {
		dp0 = Math.max(dp0, dp1 + prices[i] - fee);
		dp1 = Math.max(dp1, dp0 - prices[i]);
	}
	return dp0;
};
// @lc code=end
