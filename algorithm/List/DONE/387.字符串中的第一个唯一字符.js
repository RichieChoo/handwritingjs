/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
	let map = new Map();
	let visited = new Set();·
	for (let i = 0; i < s.length; i++) {
		const c = s[i];
		if (!map.has(c)) {
			!visited.has(c) && map.set(c, i);
		} else {
			visited.add(c);
			map.delete(c);
		}
	}
	let res = map.values().next().value;
	return res === undefined ? -1 : res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = firstUniqChar;
// @after-stub-for-debug-end
