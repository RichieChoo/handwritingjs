/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @description 先判断特殊情况，后续再递归比较左右字是否是镜像
 */
var isSymmetric = function (root) {
	if (!root) return true;
	return sym(root.left, root.right);
};

function sym(left, right) {
	if (left === null && right === null) return true;
	if (left === null || right === null) return false;
	if (left.val !== right.val) return false;
	return (
		sym(left.left, right.right) &&
		sym(left.right, right.left)
	);
}
// @lc code=end
