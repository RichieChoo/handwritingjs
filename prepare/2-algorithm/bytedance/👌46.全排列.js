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
	let used = {};
	let res = [];
	function backtrack(cPath = []) {
		if (cPath.length === nums.length) {
			res.push(cPath.slice());
			return;
		}

		for (let i = 0; i < nums.length; i++) {
			if (used[nums[i]]) continue;
			cPath.push(nums[i]);
			used[nums[i]] = true;
			backtrack(cPath);
			cPath.pop();
			used[nums[i]] = false;
		}
	}
	backtrack();
	return res;
};

// @lc code=end

// @after-stub-for-debug-begin
module.exports = permute;
// @after-stub-for-debug-end
