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
	function go() {
		for (let i = 0; i < n; i++) {
			for (let j = 0; j < n; j++) {
                // !=="."即原来有给定数字
				if (board[i][j] !== ".") continue;
				for (let c = 1; c <= n; c++) {
					let char = String(c);
					if (isValid(i, j, char)) {
						board[i][j] = char;
						if (go()) return true;
					}
				}
				board[i][j] = ".";
				return false;
			}
		}
		return true;
	}
	function isValid(row, col, char) {
		let blockRow = Math.floor(row / 3) * 3;
		let blockCol = Math.floor(col / 3) * 3;
		for (let i = 0; i < n; i++) {
			if (board[row][i] === char || board[i][col] === char) return false;
			let currentRow = blockRow + Math.floor(i / 3);
			let currentCol = blockCol + (i % 3);
			if (board[currentRow][currentCol] === char) return false;
		}
		return true;
	}
	go();
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = solveSudoku;
// @after-stub-for-debug-end
