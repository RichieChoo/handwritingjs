/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
	let res = [];
	const used = {};
	function backtrack(cPath = []) {
		if (cPath.length === nums.length) {
			res.push(cPath.slice());
			return;
		}
		for (const c of nums) {
			if (used[c]) continue;
			cPath.push(c);
			used[c] = true;
			backtrack(cPath);
			cPath.pop();
			used[c] = false;
		}
	}
	backtrack();
	return res;
};

// @lc code=end
