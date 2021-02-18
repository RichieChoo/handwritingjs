/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
	return helper(nums, 0, nums.length - 1);
};

function helper(nums, l, r) {
	if (l > r) return null;
	const rootValIndex = Math.floor((l + r) / 2);
	let root = new TreeNode(nums[rootValIndex]);
	root.left = helper(nums, l, rootValIndex - 1);
	root.right = helper(nums, rootValIndex + 1, r);
	return root;
}
// @lc code=end
