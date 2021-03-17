/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
	let n = board.length;
	solve();
	function solve() {
		for (let i = 0; i < n; i++) {
			for (let j = 0; j < n; j++) {
				if (board[i][j] !== ".") continue;
				for (let c = 1; c <= n; c++) {
					let char = String(c);
					if (isValid(i, j, char)) {
						board[i][j] = char;
						if (solve()) return true;
					}
				}
				board[i][j] = ".";
				return false;
			}
		}
		return true;
	}

	function isValid(row, col, char) {
		const blockRow = Math.floor(row / 3) * 3;
		const blockCol = Math.floor(col / 3) * 3;
		for (let i = 0; i < n; i++) {
			if (board[row][i] === char) return false;
			if (board[i][col] === char) return false;
			const curRow = blockRow + Math.floor(i / 3);
			const curCol = blockCol + Math.floor(i % 3);
			if (board[curRow][curCol] === char) return false;
		}
		return true;
	}
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = solveSudoku;
// @after-stub-for-debug-end
