/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
	return build(preorder, 0, preorder.length-1, inorder, 0, inorder.length-1);
};

function build(preorder, preS, preE, inorder, inS, inE) {
	if (preS > preE) return null;
	let rootVal = preorder[preS];
	let inRootIndex = 0;
	for (let i = inS; i <= inE; i++) {
		if (rootVal === inorder[i]) {
			inRootIndex = i;
			break;
		}
	}

	let root = new TreeNode(rootVal);
	let leftSize = inRootIndex - inS;
	root.left = build(
		preorder,
		preS + 1,
		preS + leftSize,
		inorder,
		inS,
		inRootIndex - 1,
	);
	root.right = build(
		preorder,
		preS + 1 + leftSize,
		preE,
		inorder,
		inRootIndex + 1,
		inE,
    );

    return root
}
// @lc code=end
