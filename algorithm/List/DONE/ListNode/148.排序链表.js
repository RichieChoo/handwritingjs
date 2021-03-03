/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * @return {ListNode}
 */
var merge = function (l1, l2) {
	let empty = new ListNode(0);
	let cur = empty;
	while (l1 && l2) {
		if (l2.val > l1.val) {
			cur.next = l1;
			l1 = l1.next;
		} else {
			cur.next = l2;
			l2 = l2.next;
		}
		cur = cur.next;
	}
	cur.next = l1 || l2;
	return empty.next;
};
var sortList = function (head) {
	function sort(head, tail) {
		if (head === null) return head;
		if (head.next === tail) {
			head.next = null;
			return head;
		}
		let slow = head;
		let fast = head;
		while (fast !== tail) {
			slow = slow.next;
			fast = fast.next;
			if (fast !== tail) {
				fast = fast.next;
			}
		}
		const mid = slow;
		return merge(sort(head, mid), sort(mid, tail));
	}
	return sort(head, null);
};
// @lc code=end
