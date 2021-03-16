/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
	let count = 0;
	function backtrack(board = [], row = 0) {
		if (row === n) {
			count++;
			return;
		}
		for (let col = 0; col < n; col++) {
			if (isVaild(board, row, col)) {
				board.push(col);
				backtrack(board, row + 1);
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
	return count;
};
// @lc code=end
