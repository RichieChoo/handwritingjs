/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
	if (!board.length) return false;
	let h = board.length;
	let w = board[0].length;
	let directions = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];
	function backtrack(i, j, index) {
		if (i < 0 || j < 0 || (i >= h) | (j >= w)) return false;
		if (board[i][j] !== word[index]) return false;
		if (index === word.length - 1) return true;
		board[i][j] = "*";
		for (const [dx, dy] of directions) {
			let x = i + dx;
			let y = j + dy;
			if (backtrack(x, y, index + 1)) return true;
		}
		board[i][j] = word[index];
		return false;
	}
	for (let i = 0; i < h; i++) {
		for (let j = 0; j < w; j++) {
			if (backtrack(i, j, 0)) return true;
		}
	}
	return false;
};
// @lc code=end
