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
var addTwoNumbers = function (l1, l2) {

    const arr1 = listToArr(l1);
    const arr2 = listToArr(l2);

    let n1 = 0;
    arr1.forEach((item, index, arr) => {});
    
};

function listToArr(list) {

    const arr = [];
    let node = list;

    while(node) {
        arr.push(node.val);
        node = node.next;
    }

    return arr;
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}


const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(listToArr(l1));
console.log(listToArr(l2));
