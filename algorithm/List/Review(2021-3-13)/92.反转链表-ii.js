/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
	let start = head,
		pre = null,
		cur = head,
		count = 1;
	while (count < left) {
		// cur的前一个赋值为start
		start = cur;
		cur = cur.next;
		count++;
	}
	let tail = cur;
	while (count <= right) {
		let next = cur.next;
		cur.next = pre;
		pre = cur;
		cur = next;
		count++;
	}

	start.next = pre;
	tail.next = cur;

	return left !== 1 ? head : pre;
};
// @lc code=end
