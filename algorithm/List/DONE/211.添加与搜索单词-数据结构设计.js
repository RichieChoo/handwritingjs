/*
 * @lc app=leetcode.cn id=211 lang=javascript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */

class WordDictionary {
	constructor() {
		this.root = {};
	}
	addWord(word) {
		let node = this.root;
		for (const char of word) {
			if (!node[char]) node[char] = {};
			node = node[char];
		}
		node.isWord = true;
	}

	search(word) {
		if (!word.length) return true;
		return this.bfs(word, this.root);
	}
	bfs(word, root) {
		let node = root;
		for (let i = 0; i < word.length; i++) {
			const char = word.charAt(i);
			if (!node[char]) {
				if (char === ".") {
					for (let p in node) {
						if (!p || p === "isWord") continue;
						if (this.bfs(word.slice(i + 1), node[p])) {
							return true;
						}
					}
				}
				return false;
			}
			node = node[char];
		}
		return node && node.isWord === true;
	}
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end
