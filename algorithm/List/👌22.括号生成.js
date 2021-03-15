/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
	let res = [];
	function backtrack(l = n, r = n, track = []) {
		if (l < 0 || r < 0 || l > r) return;
		if (l === 0 && r === 0) {
			res.push(track.join(""));
			return;
		}

		// 尝试放一个左括号
		track.push("("); // 选择
		backtrack(l - 1, r, track);
		track.pop(); // 撤消选择

		// 尝试放一个右括号
		track.push(")"); // 选择
		backtrack(l, r - 1, track);
		track.pop(); // 撤消选择
	}
	backtrack();
	return res;
};

//opzit
var generateParenthesis = function (n) {
	const res = [];
	function go(l = n, r = n, s = "") {
		if (l > r) return; // The number of '(' should be always >= ')'
		if (l === 0 && r === 0) {
			res.push(s);
			return;
		}
		if (l > 0) go(l - 1, r, s + "(");
		if (r > 0) go(l, r - 1, s + ")");
	}
	go();
	return res;
};
// @lc code=end
