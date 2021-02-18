/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
	let res = [];
	let map = new Map();

	function find(root) {
		if (!root) return "#";
		let leftStr = find(root.left);
		let rightStr = find(root.right);

		let rootStr = `${leftStr},${rightStr},${root.val}`;
		if (map.get(rootStr)) {
			map.set(rootStr, map.get(rootStr) + 1);
		} else {
			map.set(rootStr, 1);
		}
		if (map.get(rootStr) === 2) {
			res.push(root);
		}
		return rootStr;
	}
	find(root);
	return res;
};
// @lc code=end
