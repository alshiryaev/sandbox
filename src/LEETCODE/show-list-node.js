function showListNode(listNode, cb) {
  let pointer = listNode;
  while (pointer != null) {
    cb(pointer.val);
    pointer = pointer.next;
  }
}

module.exports = {
  showListNode,
};
