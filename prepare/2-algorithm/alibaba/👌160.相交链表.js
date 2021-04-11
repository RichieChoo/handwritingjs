/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
	let a = headA,
		b = headB;
	while (a !== b) {
		a = a ? a.next : headB;
		b = b ? b.next : headA;
	}
	return a;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = getIntersectionNode;
// @after-stub-for-debug-end
