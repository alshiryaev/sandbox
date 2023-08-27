/**
 * @param {ListNode} l
 * @return {number}
 */
function linkedListToNumber(l) {
  let result = 0;
  let pointer = l;

  while (pointer !== null) {
    result = result * 10 + pointer.val;
    pointer = pointer.next;
  }

  return result;
}
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

module.exports = {
  ListNode,
  linkedListToNumber,
};
