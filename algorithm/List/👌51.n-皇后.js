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
	function backtrack(row = 0, board = []) {
		if (row === n) {
			res.push(
				board.map(col => ".".repeat(col) + "Q" + ".".repeat(n - col - 1)),
			);
			return;
		}
		for (let col = 0; col < n; col++) {
			if (isVaild(board, row, col)) {
				board.push(col);
				backtrack(row + 1, board);
				board.pop();
			}
		}
	}
	function isVaild(board, row, col) {
		return board.every((c, r) => {
			return c !== col && c + r !== col + row && c - r !== col - row;
		});
	}
	backtrack();
	return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = solveNQueens;
// @after-stub-for-debug-end
