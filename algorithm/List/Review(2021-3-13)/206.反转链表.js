/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
// 双指针
var reverseList = function (head) {
	if (!head || !head.next) return head;
	let [pre, cur] = [null, head];
	while (cur !== null) {
		let next = cur.next;
		cur.next = pre;
		pre = cur;
		cur = next;
	}
	return pre;
};

// 递归
var reverseList = function (head) {
	if (!head || !head.next) return head;
	//将当前与剩下所有交换，递归处理
	let res = reverseList(head.next);
	head.next.next = head;
	head.next = null;
	return res;
};
// @lc code=end
