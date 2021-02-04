/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 * @description 先找,然后分情况删除
 */
var deleteNode = function (root, key) {
	if (!root) return null;
	if (root.val > key) {
		root.left = deleteNode(root.left, key);
	} else if (root.val === key) {
		if (!root.left && !root.right) {
			//当场去世
			return null;
		} else if (!root.left) {
			return root.right;
		} else if (!root.right) {
			return root.left;
		} else if (root.left && root.right) {
			// 找到右子树的最小节点
			let minNode = getMin(root.right);
			// 把 root 改成 minNode
			root.val = minNode.val;
			// 转而去删除 minNode
			root.right = deleteNode(root.right, minNode.val);
		}
	} else if (root.val < key) {
		root.right = deleteNode(root.right, key);
	}
	return root;
};

function getMin(root) {
	while (root.left !== null) return root.left;
	return root;
}
// @lc code=end
