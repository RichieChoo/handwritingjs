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

var mergeTwoLists = function (l1, l2) {
	const emty = { val: 0, next: null };
	let cur = emty;
	while (l1 && l2) {
		if (l1.val > l2.val) {
			cur.next = l2;
			l2 = l2.next;
		} else {
			cur.next = l1;
			l1 = l1.next;
		}
		cur = cur.next;
	}
	//把剩余的接上
	cur.next = l1 || l2;
	return emty.next;
};
var sortList = function (head) {
	function sort(head, tail) {
		if (head === null) return head;
		if (head.next === tail) {
			head.next = null;
			return head;
		}
		let slow = head,
			fast = head;
		while (fast !== tail) {
			slow = slow.next;
			fast = fast.next;
			if (fast !== tail) {
				fast = fast.next;
			}
		}
		const mid = slow;
		return mergeTwoLists(sort(head, mid), sort(mid, tail));
	}
	return sort(head, null);
};
// @lc code=end
