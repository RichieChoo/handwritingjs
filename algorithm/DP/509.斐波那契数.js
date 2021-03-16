/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

//  自上而下
var fib = function (n) {
	let map = new Map();

	function help(n) {
		if (n == 0) return 0;
		if (n == 1) return 1;
		if (map.get(n)) {
			return map.get(n);
		} else {
			let r = help(n - 1) + help(n - 2);
			map.set(n, r);
			return r;
		}
	}
	return help(n);
};

// 自下而上 dp table
var fib = function (n) {
	let dp = new Array(n + 1).fill(0);
	dp[1] = dp[2] = 1;
	for (let i = 3; i < dp.length; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	return dp[n];
};

var fib = function (n) {
	if (n === 0) return 0;
	let pre = 1,
		cur = 1;
	for (let i = 2; i < n; i++) {
		[pre, cur] = [cur, pre + cur];
	}
	return cur;
};

// @lc code=end
