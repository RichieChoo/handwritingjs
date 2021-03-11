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
	let dis = [];
	for (let i = 0; i < s.length; i++) {
		const c = s[i];
		if (!map.has(c) && !dis.includes(c)) {
			map.set(c, i);
		} else {
			dis.push(c);
			map.delete(c);
		}
	}
	let index = map.values().next().value;
	return index === undefined ? -1 : index;
};

var firstUniqChar = function (s) {
	let map = {};
	for (const c of s) {
		map[c] ? map[c]++ : (map[c] = 1);
	}
	for (let i = 0; i < s.length; i++) {
		if (map[s[i]] === 1) return i;
	}
	return -1;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = firstUniqChar;
// @after-stub-for-debug-end
