/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
	let [slow, fast] = [head, head];
	while (fast && fast.next && fast.next.next) {
		slow = slow.next;
		fast = fast.next.next;
		if (slow === fast) {
			//有环
			slow = head;
			while (slow !== fast) {
				slow = slow.next;
				fast = fast.next;
			}
			return slow;
		}
	}
	return null;
};
// @lc code=end
