const { ListNode } = require('./list-node');

/**
 * 
 * @param {number[]} arr 
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

module.exports = {
    arrayToLinkedList,
};
