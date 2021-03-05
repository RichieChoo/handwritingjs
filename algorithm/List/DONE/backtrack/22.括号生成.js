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

	//用left记录还可以使用多少个左括号，用right记录还可以使用多少个右括号
	function backbrack(left, right, track) {
		if (left > right || left < 0 || right < 0) return;
		if (left === 0 && right === 0) {
			res.push(track.join(""));
			return;
		}
		track.push("(");
		backbrack(left - 1, right, track);
		track.pop(); //撤销选择

		track.push(")");
		backbrack(left, right - 1, track);
		track.pop(); //撤销选择
	}
	backbrack(n, n, []);
	return res;
};
// @lc code=end
