/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 * @description 当diff为0时，假如叶子节点存在，则不满足条件
 */
var hasPathSum = function (root, targetSum) {
	if (!root) return false;
	let diff = targetSum - root.val;
	if (diff === 0 && !root.left && !root.right) return true;
	return hasPathSum(root.left, diff) || hasPathSum(root.right, diff);
};
// @lc code=end
