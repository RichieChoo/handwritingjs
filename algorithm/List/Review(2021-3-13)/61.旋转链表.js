/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=breakPoint
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
	if (!head || !head.next) return head;
	// 1. 求length
	let breakPoint = head,
		tail = head,
		length = 1; //起始位置为1
	while (tail.next !== null) {
		tail = tail.next;
		length++;
	}
	// 2. 找断点
	k = k % length;
	//整数倍直接返回head
	if (k === 0) return head;
	for (let i = 1; i < length - k; i++) {
		breakPoint = breakPoint.next;
	}
	//尾接头
	tail.next = head;

	// 找新头
	head = breakPoint.next;

	// 断开
	breakPoint.next = null;
	return head     ;
};
// @lc code=end
