const { arrayToLinkedList } = require("./array-to-linked-list");
const { showListNode } = require("./show-list-node");
const { ListNode } = require("./list-node");
/**
 *
 * https://leetcode.com/problems/add-two-numbers/
 *
 * Definition for singly-linked list.
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let p1 = l1,
    p2 = l2;
  let result = new ListNode(0);
  let memo = 0;
  let head = result;

  while (p1 !== null || p2 !== null) {
    let v1 = p1 === null ? 0 : p1.val;
    let v2 = p2 === null ? 0 : p2.val;
    let sum = v1 + v2 + memo;
    memo = Math.floor(sum / 10);
    result.next = new ListNode(sum % 10);
    result = result.next;

    if (p1 !== null) {
      p1 = p1.next;
    }

    if (p2 !== null) {
      p2 = p2.next;
    }

    if (memo > 0) {
      result.next = new ListNode(1);
    }
  }

  return head.next;
};

module.exports = {
  addTwoNumbers,
};


const l1 = arrayToLinkedList([2, 4, 3]);
const l2 = arrayToLinkedList([5, 6, 4]);

let res1 = addTwoNumbers(l1, l2);
showListNode(res1, console.log);
