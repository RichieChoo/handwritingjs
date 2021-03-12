/*
 * @lc app=leetcode.cn id=211 lang=javascript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
	this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
	let node = this.root;
	for (const c of word) {
		if (!node[c]) node[c] = {};
		node = node[c];
	}
	node.End = true;
};

WordDictionary.prototype.bfs = function (root, word) {
	let node = root;
	for (let i = 0; i < word.length; i++) {
		const c = word[i];
		if (!node[c]) {
			if (c === ".") {
				for (const p in node) {
					if (!p || p === "End") continue;
					if (this.bfs(node[p], word.slice(i + 1))) return true;
				}
			}
			return false;
		}

		node = node[c];
	}
	return node && node.End === true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
	if (!word.length) return true;
	return this.bfs(this.root, word);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end
