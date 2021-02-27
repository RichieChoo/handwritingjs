/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
	let res = [];
	function go(board = [], r = 0) {
		if (r === n) {
			res.push(board.map(v => ".".repeat(v) + "Q" + ".".repeat(n - v - 1)));
			return;
		}
		for (let c = 0; c < n; c++) {
			if (
				!board.some(
					(bc, br) => bc === c || bc === c + r - br || bc === c - r + br,
				)
			) {
				board.push(c);
				go(board, r + 1);
				board.pop();
			}
		}
	}
	go();

	return res;
};
// @lc code=end
