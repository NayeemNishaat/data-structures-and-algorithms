class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      (this.head = this.tail = newNode), this.length++;
      return;
    }

    (this.tail.next = newNode), (newNode.prev = this.tail);
    (this.tail = newNode), this.length++;
  }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);

console.log(JSON.stringify(list, null, 2));
