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
var diffWaysToCompute = function (input) {
	let res = [];
	let opers = ["+", "-", "*"];
	if (!isNaN(input)) return [Number(input)];
	for (let i = 0; i < input.length; i++) {
		const c = input[i];
		if (opers.includes(c)) {
			let left = diffWaysToCompute(input.slice(0, i));
			let right = diffWaysToCompute(input.slice(i + 1));
			for (const l of left) {
				for (const r of right) {
					if (c === "*") {
						res.push(l * r);
					} else if (c === "-") {
						res.push(l - r);
					} else if (c === "+") {
						res.push(l + r);
					}
				}
			}
		}
	}

	return res;
};
// @lc code=end
