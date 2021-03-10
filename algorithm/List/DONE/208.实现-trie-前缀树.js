/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
class Trie {
	constructor() {
		this.root = {};
	}
	insert(word) {
		let node = this.root;
		for (const char of word) {
			if (!node[char]) node[char] = {};
			node = node[char];
		}
		node.isWord = true;
	}
	traverse(word) {
		let node = this.root;
		for (const char of word) {
			node = node[char];
			if (!node) return false;
		}
		return node;
	}
	search(word) {
		const node = this.traverse(word);
		return node !== false && node.isWord;
	}
	startsWith(prefix) {
		return this.traverse(prefix) !== false;
	}
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
