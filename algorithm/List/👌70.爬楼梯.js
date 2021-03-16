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
		if (n === 0) return 1;
		if (n === 1) return 1;
		if (map.has(n)) return map.get(n);
		let res = help(n - 2) + help(n - 1);
		map.set(n, res);
		return res;
	}
	return help(n);
};

var climbStairs = function (n) {
	let pre = 0,
		cur = 1;
	for (let i = 0; i < n; i++) {
		[pre, cur] = [cur, pre + cur];
	}
	return cur;
};
// @lc code=end
