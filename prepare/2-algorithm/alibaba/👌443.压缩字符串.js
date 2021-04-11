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
	if (!chars.length) return 0;
	let pre = chars[0],
		count = 0,
		res = 0;
	for (let i = 0; i <= chars.length; i++) {
		if (chars[i] === pre) {
			count++;
		} else {
			chars[res] = pre;
			if (count > 1) {
				let str = String(count);
				for (let j = 0; j < str.length; j++) {
					chars[++res] = str[j];
				}
			}
			res++;
			pre = chars[i];
			count = 1;
		}
	}
	return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = compress;
// @after-stub-for-debug-end
