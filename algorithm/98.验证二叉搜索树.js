/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 * @description 对于每一个节点 都判断 root是否未null,root.left<root.val<root.right 并且每个节点都要受到min,max的约束
 */

var isValidBST = function (root, min = null, max = null) {
	if (root === null) return true;
	if ((min && min.val >= root.val) || (max && max.val <= root.val))
		return false;
	return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};

// @lc code=end
