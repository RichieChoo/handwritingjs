/*
 * @lc app=leetcode.cn id=979 lang=javascript
 *
 * [979] 在二叉树中分配硬币
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
 */
var distributeCoins = function (root) {
	let count = 0;
	function find(node) {
		if (!node) return 0;
		let left = find(node.left);
		let right = find(node.right);
		count += Math.abs(left) + Math.abs(right);
		return left + right + node.val - 1;
	}
	find(root);
	return count;
};
// @lc code=end
