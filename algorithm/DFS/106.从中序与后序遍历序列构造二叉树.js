/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 * @description 从后序中获取root信息，然后在中序找到对应的root信息，需要注意每个节点的后中序都是不一样的
 */
var buildTree = function (inorder, postorder) {
	return build(
		inorder,
		0,
		inorder.length - 1,
		postorder,
		0,
		postorder.length - 1,
	);
};
function build(inorder, inS, inE, postorder, postS, postE) {
	if (inS > inE) return null;
	let rootVal = postorder[postE];
	let inRootIndex = 0;
	for (let i = inS; i <= inE; i++) {
		if (inorder[i] === rootVal) {
			inRootIndex = i;
			break;
		}
	}
	let leftSize = inRootIndex - inS;
	let root = new TreeNode(rootVal);
	root.left = build(
		inorder,
		inS,
		inRootIndex - 1,
		postorder,
		postS,
		postS + leftSize - 1,
	);
	root.right = build(
		inorder,
		inRootIndex + 1,
		inE,
		postorder,
		postS + leftSize,
		postE - 1,
	);
	return root;
}
// @lc code=end
