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

	if (board.length && board[0].length) {
		let [h, w] = [board.length, board[0].length];
		let dirs = [
			[0, 1],
			[0, -1],
			[1, 0],
			[-1, 0],
		];

		function backtrack(i, j, word, index = 0) {
			if (i < 0 || j < 0 || i >= h || j >= w) return;
			if (board[i][j] !== word[index]) return;
			if (index === word.length - 1) {
				!res.includes(word) && res.push(word);
				return;
			}

			board[i][j] = "*";
			for (const [dx, dy] of dirs) {
				backtrack(i + dx, j + dy, word, index + 1);
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
	}
	return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = findWords;
// @after-stub-for-debug-end
