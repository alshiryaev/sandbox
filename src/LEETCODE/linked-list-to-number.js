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

module.exports = {
  linkedListToNumber,
};
