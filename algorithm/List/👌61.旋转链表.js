/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
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
	let empty = new ListNode(0);
	let slow = empty;
	let fast = empty;
	let length = 0;
	empty.next = head;
	while (fast.next) {
		fast = fast.next;
		length++;
	}
	k = k % length;
	for (let i = 0; i < length - k; i++) {
		slow = slow.next;
	}
	fast.next = empty.next;
	empty.next = slow.next;
	slow.next = null;
	return empty.next;
};
// @lc code=end
