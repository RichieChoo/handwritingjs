/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
	if (!head || !head.next) return false;
	let map = new Map();
	while (head) {
		if (map.get(head)) return true;
		map.set(head, true);
		head = head.next;
	}
	return false;
};

var hasCycle = function (head) {
	if (!head || !head.next) return false;
	let slow = head;
	let fast = head;
	while (fast !== null) {
		if (fast.next === null) return false;
		slow = slow.next;
		fast = fast.next.next;
		if (fast === slow) return true;
	}
	return false;
};
// @lc code=end
