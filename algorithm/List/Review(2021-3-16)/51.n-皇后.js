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

	function backtrack(board = [], row = 0) {
		if (row === n) {
			res.push(board.map(c => ".".repeat(c) + "Q" + ".".repeat(n - c - 1)));
			return;
		}
		for (let col = 0; col < n; col++) {
			if (isVaild(board, row, col)) {
				//将校验通过的col推入board
				board.push(col);
				backtrack(board, row + 1);
				board.pop();
			}
		}
	}
	function isVaild(board, row, col) {
		return board.every(
			(c, r) => c !== col && c + r !== col + row && c - r !== col - row,
		);
	}
	backtrack();
	return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = solveNQueens;
// @after-stub-for-debug-end
