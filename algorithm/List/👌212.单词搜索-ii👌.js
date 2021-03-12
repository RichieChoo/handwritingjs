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
	if (!board.length) return res;
	let h = board.length;
	if (!h) return res;
	let w = board[0].length;
	if (!w) return res;

	const directions = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];
	function backtrack(i, j, word, index = 0) {
		if (i < 0 || j < 0 || i >= h || j >= w || !word.length) return;
		if (word[index] !== board[i][j]) return;
		if (index === word.length - 1) {
			return !res.includes(word) && res.push(word);
		}
		board[i][j] = "*";
		for (const [dx, dy] of directions) {
			let x = dx + i;
			let y = dy + j;
			backtrack(x, y, word, index + 1);
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

var findWords = function (board, words) {
	const directions = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];
	let h = board.length;
	let w = board[0].length;
	let res = [];
	function buildTrie() {
		const root = {};
		for (const w of words) {
			let node = root;
			for (const c of w) {
				if (!node[c]) node[c] = {};
				node = node[c];
			}
			node.End = w;
		}
		return root;
	}
	const root = buildTrie();

	function backtrack(node, i, j) {
		if (node.End) {
			res.push(node.End);
			node.End = false;
		}
		if (i < 0 || j < 0 || (i >= h) | (j >= w)) return;
		const cur = board[i][j];
		if (!node[cur]) return;
		board[i][j] = "*";
		for (const [dx, dy] of directions) {
			const x = i + dx;
			const y = j + dy;
			// if (x >= 0 && y >= 0 && x < h && y < w) {
			backtrack(node[cur], x, y);
			// }
		}
		board[i][j] = cur;
	}

	for (let i = 0; i < h; i++) {
		for (let j = 0; j < w; j++) {
			backtrack(root, i, j);
		}
	}
	return res;
};

// @lc code=end

// @after-stub-for-debug-begin
module.exports = findWords;
// @after-stub-for-debug-end
