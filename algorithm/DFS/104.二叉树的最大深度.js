/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 * @description 注意如果root存在，别忘记+1
 */
var maxDepth = function (root) {
	if (!root) return 0;
	if (!root.left) return maxDepth(root.right) + 1;
	if (!root.right) return maxDepth(root.left) + 1;
	return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
// @lc code=end
