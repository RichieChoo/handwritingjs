/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
	let strArr = s.split(" ");
	let map = new Map();
	let count = 0;
	if (pattern.length !== strArr.length) return false;
	for (let i = 0; i < pattern.length; i++) {
		const c = pattern[i].charCodeAt(0);
		const v = strArr[i];
		if (map.has(c)) {
			if (v === map.get(c)) count++;
		} else {
			map.set(c, v);
			count++;
		}
		if (map.has(v)) {
			if (c !== map.get(v)) count--;
		} else {
			map.set(v, c);
		}
	}
	return count === pattern.length;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = wordPattern;
// @after-stub-for-debug-end
