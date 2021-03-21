/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

//  dp[i][j]计算text1[i..]和text2[j..]的最长公共子序列长度。

/*
    if(text[i-1] === text[j-1]){
        dp[i][j] = dp[i-1][j-1] +1
    }else{
        dp[i][j] = Math.max(dp[i][j-1],dp[i-1][j])
    }
*/
var longestCommonSubsequence = function (text1, text2) {
	if (!text1 || !text2) return 0;
	let [m, n] = [text1.length, text2.length];
	let dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			if (text1[i - 1] === text2[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1] + 1;
			} else {
				dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
			}
		}
	}
	return dp[m][n];
};
// @lc code=end
