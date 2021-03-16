/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
	/*
    1. left >right
    */

	let res = [];

	function go(str = "", l = n, r = n) {
        //剩余的l一定小于等于r
		if (l > r || l < 0 || r < 0) return;
		if (l === 0 && r === 0) {
			res.push(str);
		}
		str += "(";
		go(str, l - 1, r);
		str = str.substring(0, str.length - 1);

		str += ")";
		go(str, l, r - 1);
		str = str.substring(0, str.length - 1);
	}

	go();
	return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = generateParenthesis;
// @after-stub-for-debug-end
