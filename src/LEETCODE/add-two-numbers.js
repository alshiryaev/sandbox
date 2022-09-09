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
  let p1 = l1, p2 = l2;
  let head = new ListNode(0);
  let current = head;
  let memo = 0;

  while (p1 !== null || p2 !== null) {
    let x = p1 !== null ? p1.val : 0;
    let y = p2 !== null ?  p2.val : 0;
    let sum  = x + y + memo;
    memo = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    
    if (p1 !== null) {
        p1 = p1.next;
    }

    if (p2 !== null) {
        p2 = p2.next;
    }
    
    if (memo > 0) {
        current.next = new ListNode(1);
    }
  }

  return head.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrToListNode(arr) {
  let res = new ListNode();

  let t = res;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    t.val = element;
    if (index < arr.length - 1) {
      t.next = new ListNode();
      t = t.next;
    }
  }
  return res;
}

function showListNode(listNode) {
  let pointer = listNode;
  while (pointer != null) {
    console.log(pointer.val);
    pointer = pointer.next;
  }
}

const l1 = arrToListNode([2, 4, 3]);
const l2 = arrToListNode([5, 6, 4]);

let res1 = addTwoNumbers(l1, l2);
showListNode(res1);

let res2 = addTwoNumbers(new ListNode(0), new ListNode(0));
showListNode(res2);

//Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
//Output: [8,9,9,9,0,0,0,1]

const l11 = arrToListNode([9,9,9,9,9,9,9]);
const l22 = arrToListNode([9,9,9,9]);
const res333 = addTwoNumbers(l11, l22);
showListNode(res333);