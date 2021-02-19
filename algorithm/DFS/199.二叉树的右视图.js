/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function (root) {
	if (!root) return [];
	let res = [];

	function traverse(root, level) {
		if (!root) return;
		res[level] = root.val;
		traverse(root.left, level + 1);
		traverse(root.right, level + 1);
	}
	traverse(root, 0);
	return res;
};
// @lc code=end
