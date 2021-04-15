/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let visited = new Set();
	let index = -1;
	let res = 0;
	for (let i = 0; i <= s.length; i++) {
		i !== 0 && visited.delete(s[i - 1]);
		while (index + 1 < s.length && !visited.has(s[index + 1])) {
			visited.add(s[index + 1]);
			index++;
		}
		res = Math.max(res, index + 1 - i);
	}
	return res;
};
var lengthOfLongestSubstring = function (s) {
	let dp = new Array(s.length + 1).fill(1);
	dp[0] = 0;
	let visited = [];
	for (let i = 1; i <= s.length; i++) {
		let c = s[i - 1];
		let index = visited.indexOf(c);
		if (index === -1) {
			visited.push(c);
			dp[i] = dp[i - 1] + 1;
		} else {
			visited = visited.slice(index + 1);
			visited.push(c);
			dp[i] = Math.max(dp[i], visited.length);
		}
	}
	return Math.max(...dp);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end
