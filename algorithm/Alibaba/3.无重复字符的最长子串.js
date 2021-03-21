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

//  dp[i]   s[..i]的当前子串长度
//  visited s[..i]当前的子串 （如果重复了就把重复位置之前的去掉）
var lengthOfLongestSubstring = function (s) {
	if (!s.length) return 0;
	let visited = [];
	let dp = new Array(s.length + 1).fill(1);
	dp[0] = 0;
	for (let i = 1; i <= s.length; i++) {
		let index = visited.indexOf(s[i - 1]);
		if (index === -1) {
			dp[i] = Math.max(dp[i], dp[i - 1] + 1);
		} else {
			visited = visited.slice(index + 1);
			dp[i] = Math.max(dp[i], visited.length + 1);
		}
		visited.push(s[i - 1]);
	}
	return Math.max(...dp);
};

// @lc code=end

// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end
