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

  pop() {
    if (!this.head) return undefined;
    const popped = this.tail;
    if (this.length === 1) {
      (this.head = this.tail = null), this.length--;
      return popped;
    }

    this.tail = popped.prev;
    (popped.prev = this.tail.next = null), this.length--;

    return popped;
  }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.pop();

console.log(list);
