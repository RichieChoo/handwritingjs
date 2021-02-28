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
 */
var hasPathSum = function (root, targetSum) {
	if (!root) return false;
	let dif = targetSum - root.val;
	if (!root.left && !root.right && dif === 0) return true;
	return hasPathSum(root.left, dif) || hasPathSum(root.right, dif);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = hasPathSum;
// @after-stub-for-debug-end
