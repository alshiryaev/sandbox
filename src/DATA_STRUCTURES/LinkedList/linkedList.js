class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
    this.lenght = 0;
  }

  addNode(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }
    this.lenght++;
  }

  removeNode(value) {
    let currentNode = this.root;
    let prevNode = null;

    if (currentNode.value === value) {
      this.root = currentNode.next;
    } else {
      while (currentNode.value !== value) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }

      prevNode.next = currentNode.next;
      currentNode = null;
    }

    this.lenght--;
  }

  indexOf(value) {
    let index = -1;
    let currentNode = this.root;
    while (currentNode) {
      index++;
      if (currentNode.value === value) {
        return index;
      } else {
        currentNode = currentNode.next;
      }
    }

    return -1;
  }

  elementAt(index) {
    let count = 0;
    let currentNode = this.root;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }

    return currentNode.value;
  }


  addValueAt(value, index) {
    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.root;
      this.root = newNode;

    } else {

      let currentNode = this.root;
      let prevNode = null;
      let count = 0;

      while (count < index) {
        count++;
        prevNode = currentNode;
        currentNode = currentNode.next;
      }

      newNode.next = currentNode;
      prevNode.next = newNode;
    }

    this.lenght++;
  }

  removeAt(index) {
    if (index === 0) {
      const tempNodeValue = this.root.value;
      const node = this.root.next;
      this.root = node;
      this.lenght --;
      return tempNodeValue;
    } else {
      let count = 0;
      let currentNode = this.root;
      let prevNode = null;

      while (count < index) {
        count++;
        prevNode = currentNode;
        currentNode = currentNode.next;
      }

      prevNode.next = currentNode.next || null;
      this.lenght--;
      return currentNode.value;
    }
  }

  get count() {
    return this.lenght;
  }

  get isEmpty() {
    return this.lenght === 0;
  }

  [Symbol.iterator]() {
    return {
      currentNode: this.root,
      next() {
        const value = this.currentNode !== null
          ? this.currentNode.value
          : null;
        const done = this.currentNode === null;
        this.currentNode = this.currentNode !== null
          ? this.currentNode.next : null;
        return {
          done,
          value,
        };
      },
    };
  }
}

module.exports = {
  LinkedList,
  Node
};
