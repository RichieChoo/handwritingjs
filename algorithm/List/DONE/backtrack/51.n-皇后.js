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
	backtrack();
	function backtrack(board = [], row = 0) {
		if (row === n) {
			res.push(board.map(c => ".".repeat(c) + "Q" + ".".repeat(n - c - 1)));
			return;
		}
		for (let col = 0; col < n; col++) {
			let c = col;
			let b = board;
			let invalid = board.some(
				(c, r) => c === col || c === col + (row - r) || c === col - (row - r),
			);
			if (!invalid) {
				board.push(col);
				backtrack(board, row + 1);
				board.pop();
			}
		}
	}
	return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = solveNQueens;
// @after-stub-for-debug-end
