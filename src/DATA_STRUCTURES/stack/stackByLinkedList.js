const { LinkedList } = require("../LinkedList/linkedList");

class StackByLinkedList {
  constructor(value) {
    this.list = new LinkedList();
    if (value !== undefined || value !== null) {
      this.list.addNode(value);
    }
  }

  push(value) {
    this.list.addValueAt(value, 0);
  }

  pop() {
    return this.list.removeAt(0);
  }

  get showHead() {
    return this.list.root.value;
  }

  popByCondition(n, predicat) {
    const value = this.pop();
    if (predicat()) {
      return value;
    }

    return this.popByCondition(n, predicat);
  }

  get size() {
    return this.list.lenght;
  }

  get isEmpty() {
    return this.size === 0;
  }
}

module.exports = {
  StackByLinkedList,
};
