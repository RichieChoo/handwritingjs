/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
 * @param {number} val
 * @return {TreeNode}
 * @description 对每个节点都返回插入后的TreeNode
 */

var insertIntoBST = function (root, val) {
	if (!root) root = new TreeNode(val);
	if (root.val > val) {
		root.left = insertIntoBST(root.left, val);
	} else if (root.val === val) {
	} else if (root.val < val) {
		root.right = insertIntoBST(root.right, val);
	}
	return root;
};
// @lc code=end
