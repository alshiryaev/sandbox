const { Node, LinkedList } = require('../LinkedList/linkedList');

class StackByLinkedList {

    constructor(value) {
        this.list = new LinkedList();
        this.list.addNode(value);
    }

    push(value) {
        this.list.addValueAt(value, 0);
    }

    pop() {
        return this.list.removeAt(0);
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