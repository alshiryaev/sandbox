class Node {
  constructor(value) {
    this.value = value;
    this.leftNode = null;
    this.rightNode = null;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  size() {
    return this.count;
  }

  insert(value) {
    const newNode = new Node(value);
    this.count++;
    const searchTree = (node) => {
      if (value < node.value) {
        if (node.leftNode == null) {
          node.leftNode = newNode;
        } else {
          searchTree(node.leftNode);
        }
      } else if (value > node.value) {
        if (node.rightNode == null) {
          node.rightNode = newNode;
        } else {
          searchTree(node.rightNode);
        }
      }
    };

    searchTree(this.root);
  }

  min() {
    let currentNode = this.root;
    while (currentNode.leftNode != null) {
      currentNode = currentNode.leftNode;
    }

    return currentNode.value;
  }

  max() {
    let currentNode = this.root;

    while (currentNode.rightNode != null) {
      currentNode = currentNode.rightNode;
    }

    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.root;
    while (currentNode != null) {
      if (currentNode.value === value) {
        return true;
      }

      if (value < currentNode.value) {
        currentNode = currentNode.leftNode;
      } else {
        currentNode = currentNode.rightNode;
      }
    }

    return false;
  }

  dfsInOrder() {
    let result = [];

    const traverse = (node) => {
      if (node.leftNode != null) {
        traverse(node.leftNode);
      }

      result.push(node.value);

      if (node.rightNode != null) {
        traverse(node.rightNode);
      }
    };

    traverse(this.root);
    return result;
  }

  bfs() {
    const result = [];
    const queue = [];

    queue.push(this.root);
    while (queue.length > 0) {
      let currentNode = queue.shift();
      result.push(currentNode.value);

      if (currentNode.leftNode != null) {
        queue.push(currentNode.leftNode);
      }

      if (currentNode.rightNode != null) {
        queue.push(currentNode.rightNode);
      }
    }

    return result;
  }
}


module.exports = {
  Node,
  BST
}