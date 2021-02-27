/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	let visited = [];
	for (let i = 0; i < s.length; i++) {
		let cur = s.charAt(i);
		if (cur === "(") {
			visited.push(")");
		} else if (cur === "{") {
			visited.push("}");
		} else if (cur === "[") {
			visited.push("]");
		} else if (cur !== visited.pop()) {
			return false;
		}
	}
	return visited.length === 0;
};

/*
eg1: 成对出现
eg2: 嵌套
*/
// @lc code=end
