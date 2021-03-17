/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
	let map = new Map();
	function help(n) {
		if (n === 1) return 1;
		if (n === 2) return 2;
		if (map.get(n)) return map.get(n);
		let res = help(n - 2) + help(n - 1);
		map.set(n, res);
		return res;
	}
	return help(n);
};

var climbStairs = function (n) {
	let dp = new Array(n + 1).fill(0);
	dp[1] = 1;
	dp[2] = 2;
	for (let i = 3; i <= n; i++) {
		dp[i] = dp[i - 2] + dp[i - 1];
	}
	return dp[n];
};

var climbStairs = function (n) {
	let pre = 1,
		cur = 1;
	for (let i = 1; i < n; i++) {
		[pre, cur] = [cur, pre + cur];
	}
	return cur;
};
// @lc code=end
