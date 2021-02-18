/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
 * @description 先取左边的最大路径，再取右边的最大路径，
 */
var maxPathSum = function (root) {
	var max = -Number.MAX_VALUE;
	function getMaxPath(root) {
		if (!root) return 0;
		let left = getMaxPath(root.left);
		let right = getMaxPath(root.right);
		max = Math.max(max, root.val + left + right);
		return Math.max(0, root.val + left, root.val + right);
	}
	getMaxPath(root);
	return max;
};
// @lc code=end
