const { ListNode } = require('./list-node');

function linkedListToReverseNumber(l) {
  let pointer = l;
  let index = 0;
  let result = 0;

  while (pointer !== null) {
    result = result + pointer.val * Math.pow(10, index++);
    pointer = pointer.next;
  }
  return result;
}

module.exports = {
  linkedListToReverseNumber,
};

const l1 = new ListNode(3, new ListNode(2, new ListNode(1, null)));
console.log(linkedListToReverseNumber(l1));
