/*
 * @lc app=leetcode.cn id=241 lang=javascript
 *
 * [241] 为运算表达式设计优先级
 */

// @lc code=start
/**
 * @param {string} input
 * @return {number[]}
 */
/**
 * 1.分解：遇到运算符，计算左右两侧的结果集
 * 2.解决：diffWaysToCompute 递归函数求出子问题的解
 * 3.合并：根据运算符合并子问题的解
 */
var diffWaysToCompute = function (input) {
	let res = [];
	let opers = ["+", "-", "*"];

	//仅数字时直接返回数字，最小子问题
	if (!isNaN(input)) return [Number(input)];
	if (input) {
		for (let i = 0; i < input.length; i++) {
			const c = input[i];
			if (opers.includes(c)) {
				let left = diffWaysToCompute(input.slice(0, i));
				let right = diffWaysToCompute(input.slice(i + 1));
				for (const l of left) {
					for (const r of right) {
						if (c === "+") {
							res.push(l + r);
						} else if (c === "-") {
							res.push(l - r);
						} else {
							res.push(l * r);
						}
					}
				}
			}
		}
	}
	return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = diffWaysToCompute;
// @after-stub-for-debug-end
