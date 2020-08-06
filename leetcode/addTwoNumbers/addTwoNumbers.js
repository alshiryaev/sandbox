function ListNode(val) {
  this.val = val;
  this.next = null;
}

function LinkedList() {
  let head = null;

  this.add = function(nodeValue) {
    const node = new ListNode(nodeValue);
    if (head === null) {
      head = node;
    } else {
      let currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
  };

  this.head = function() {
    return head;
  };

  
}

function createLinkedList(arr) {
  const list = new LinkedList();
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    list.add(element);
  }
  return list;
}

const one = createLinkedList([2, 3, 5]);
const two = createLinkedList([5, 6, 4]);
const addTwoNumbers = function(l1, l2) {
  listToNumber(l1.head());
  listToNumber(l2.head());
};

function listToNumber(list) {
    let res = 0,
    index = 0,
    length = 0,
    currentNode = null;

  currentNode = list;
  while (currentNode.next !== null) {    
    length ++;
    currentNode = currentNode.next;
  }

  console.log('l = ', length);
}

addTwoNumbers(one, two);
