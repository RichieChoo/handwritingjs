/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
	let start = 35;
	let res = [];
	while (start < 127) {
		res.push(String.fromCharCode(start));
		start++;
    }
    console.log(res)
};

// @lc code=end

// @after-stub-for-debug-begin
module.exports = compress;
// @after-stub-for-debug-end
