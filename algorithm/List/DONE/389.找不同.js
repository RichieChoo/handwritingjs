/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
	let arr = t.split("");
	for (let i = 0; i < s.length; i++) {
		const index = arr.findIndex(v => v === s.charAt(i));
		arr.splice(index, 1);
	}
	return arr[0];
};

var findTheDifference = function(s, t) {
    const sum1 = s.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
    const sum2 = t.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
    return String.fromCharCode(sum2 - sum1);
  };
// @lc code=end
