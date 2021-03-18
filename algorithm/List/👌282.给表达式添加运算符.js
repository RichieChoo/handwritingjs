/*
 * @lc app=leetcode.cn id=282 lang=javascript
 *
 * [282] 给表达式添加运算符
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function (num, target) {
	let res = [],
		ans = [];
	opers = ["+", "-", "*"];
	const backTrack = (str, val, pre, k) => {
		if (str.length < 1) {
			if (val === target) {
				ans.push(res.slice(0, k).join(""));
			}
			return;
		}
		for (let i = 0; i < str.length; i++) {
			if (k === 0) {
				res[k] = str.slice(0, i + 1);
				backTrack(str.slice(i + 1), Number(res[k]), Number(res[k]), k + 1);
			} else {
				let curVal,
					curPre,
					curStr = str.slice(i + 1);
				res[k + 1] = str.slice(0, i + 1);
				let c = Number(res[k + 1]);
				for (const oper of opers) {
					res[k] = oper;
					if (oper === "+") {
						curVal = val + c;
						curPre = c;
					} else if (oper === "-") {
						curVal = val - c;
						curPre = -c;
					} else {
						curVal = val - pre + pre * c;
						curPre = pre * c;
					}
					backTrack(curStr, curVal, curPre, k + 2);
				}
			}
			if (str[0] === "0") break;
		}
	};
	backTrack(num, 0, 0, 0);
	return ans;
};
// @lc code=end
