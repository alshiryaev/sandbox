const canvas = document.getElementById("canvas");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  [Symbol.toPrimitive]() {
    return this.value;
  }

  toString() {
    return this.value;
  }
}

class BinaryTree {
  constructor() {
    this.count = 0;
    this.root = null;
  }

  get size() {
    return this.count;
  }

  insert(newValue) {
    const newNode = new Node(newValue);
    this.count += 1;

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (newValue < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  min() {
    let currentNode = this.root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  }

  max() {
    let currentNode = this.root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.root;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  preOrder(node, cb) {
    if (!node) {
      return;
    }

    if (cb) {
      cb(node);
    }

    this.preOrder(node.left, cb);
    this.preOrder(node.right, cb);
  }

  inOrder(node, cb) {
    if (!node) {
      return;
    }

    this.inOrder(node.left, cb);
    if (cb) {
      cb(node);
    }
    this.inOrder(node.right, cb);
  }

  postOrder(node, cb) {
    if (!node) {
      return;
    }

    this.postOrder(node.left, cb);
    this.postOrder(node.right, cb);
    if (cb) {
      cb(node);
    }
  }

  traverseDFS(cb, method) {
    return this[method].call(this, this.root, cb);
  }

  traverseBFS(cb) {

    const queue = [this.root];

    while(queue.length) {
      const node = queue.shift();
      cb(node);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
  }
}

const bt = new BinaryTree();
bt.insert(2);
bt.insert(7);
bt.insert(99);
bt.insert(1);
bt.insert(5);
bt.insert(8);
bt.insert(0);

//        2
//     1    7
//   0    5  99
//          8

console.log("size = ", bt.size);

// bt.traverseDFS((node) => {
//   console.log(node.value);
// }, "postOrder");


bt.traverseBFS(node => console.log(node.value));