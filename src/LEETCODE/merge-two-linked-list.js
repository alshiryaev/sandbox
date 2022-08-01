function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 *
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @returns ListNode
 */
const mergeTwoLists = function (l1, l2) {
  
  let result = new ListNode();
  let head = result;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val ){
      result.next = l1;
      l1 = l1.next;
    } else {
      result.next = l2;
      l2 = l2.next;  
    }
    result = result.next;
  }

  if (l1 !== null) {
    result.next = l1;
  } else {
    result.next = l2;
  }

  return head.next;
};

