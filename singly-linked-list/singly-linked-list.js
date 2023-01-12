class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) (this.head = this.tail = newNode), this.length++;
    else (this.tail.next = this.tail = newNode), this.length++;
  }
}

const list = new SinglyLinkedList();
list.push(12);
list.push(14);
list.push(15);
list.push(17);
list.push(170);
console.log(JSON.stringify(list, "", 2));
