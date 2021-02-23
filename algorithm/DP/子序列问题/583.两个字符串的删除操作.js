/*
 * @lc app=leetcode.cn id=583 lang=javascript
 *
 * [583] 两个字符串的删除操作
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

var minDistance = function (word1, word2) {
	if (!word1.length) return word2.length;
	if (!word2.length) return word1.length;
	const dp = [],
		m = word1.length,
		n = word2.length;
	for (let i = 0; i <= m; i++) {
		dp.push(new Array(n + 1).fill(m + n));
	}
	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
				dp[i][j] = dp[i - 1][j - 1] - 2;
			} else {
				dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]);
			}
		}
	}
	return dp[m][n];
};

/*
"sea"
"eat"


*/

/* By longestCommonSubsequence
var minDistance = function (word1, word2) {
	return (
		word1.length + word2.length - 2 * longestCommonSubsequence(word1, word2)
	);
};

function longestCommonSubsequence(text1, text2) {
	const dp = [],
		m = text1.length,
		n = text2.length;
	for (let i = 0; i <= m; i++) {
		dp.push(new Array(n + 1).fill(0));
	}

	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			if (text1.charAt(i - 1) === text2.charAt(j - 1)) {
				dp[i][j] = dp[i - 1][j - 1] + 1;
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
			}
		}
	}
	return dp[m][n];
}
*/
// @lc code=end
