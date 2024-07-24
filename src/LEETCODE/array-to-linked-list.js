const { ListNode } = require('./list-node');

/**
 * 
 * @param {number[]} arr 
 * @returns {ListNode}
 */
function arrayToLinkedList(arr) {
    let head = new ListNode();
    let pointer = head;
    
    arr.forEach((e, i) => {        
        pointer.val = e;
        pointer.next = i < arr.length - 1 ? new ListNode() : null;
        pointer = pointer.next;
    });
    return head;
}

/**
 * 
 * @param {ListNode} list 
 * @returns {number[]}
 */
function arrayFromLinkedList(node) {
    let pointer = node;
    const result = [];
    while (pointer != null) {
        result.push(pointer.val);
        pointer = pointer.next;
    }

    return result;
}

module.exports = {
    arrayToLinkedList,
    arrayFromLinkedList
};
