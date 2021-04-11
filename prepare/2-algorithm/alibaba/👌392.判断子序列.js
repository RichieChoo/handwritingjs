/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
	for (const c of s) {
		let index = t.indexOf(c);
		if (index === -1) {
			return false;
		} else {
			t = t.slice(index + 1);
		}
	}
	return true;
};
var isSubsequence = function (s, t) {
	let [i, j] = [0, 0];
	while (j < t.length) {
		if (s[i] === t[j]) i++;
		j++;
	}
	return i === s.length;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = isSubsequence;
// @after-stub-for-debug-end
