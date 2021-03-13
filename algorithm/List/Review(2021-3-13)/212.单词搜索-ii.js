/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
	let res = [];
	let h = board.length;
	if (!h) return res;
	let w = board[0].length;
	if (!w) return res;
	const dirs = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];
	function backtrack(i, j, word, index = 0) {
		if (board[i][j] !== word[index]) return;
		if (index === word.length - 1) {
			return !res.includes(word) && res.push(word);
		}
		board[i][j] = "#";
		for (const [dx, dy] of dirs) {
			let x = dx + i;
			let y = dy + j;
			if (x >= 0 && y >= 0 && x < h && y < w) {
				backtrack(x, y, word, index + 1);
			}
		}
		board[i][j] = word[index];
	}
	for (let i = 0; i < h; i++) {
		for (let j = 0; j < w; j++) {
			for (const word of words) {
				backtrack(i, j, word);
			}
		}
	}
	return res;
};
// @lc code=end
