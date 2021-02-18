/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree root.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 * @description 使用中序遍历
 */
var recoverTree = function (root) {
	var node1, node2;
	var prev = new TreeNode(-Number.MAX_VALUE);
	function traverse(root) {
		if (!root) return;
		traverse(root.left);
		if (root.val < prev.val) {
			node2 = root;
			if (!node1) node1 = prev;
		}
		prev = root;
		traverse(root.right);
	}
	traverse(root);
	var tmp = node1.val;
	node1.val = node2.val;
	node2.val = tmp;
};
// @lc code=end
