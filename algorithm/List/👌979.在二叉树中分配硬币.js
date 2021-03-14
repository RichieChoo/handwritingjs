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
	let res = 0;
	function dfs(root) {
		if (!root) return 0;
		let L = dfs(root.left);
		let R = dfs(root.right);
		res += Math.abs(L) + Math.abs(R);
		return root.val - 1 + L + R;
	}
	dfs(root);
	return res;
};

// @lc code=end
