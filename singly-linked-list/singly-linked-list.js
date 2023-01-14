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
    else (this.tail = this.tail.next = newNode), this.length++;
    // Important: Note: First assign newNode to this.tail.next after that update this.tail to newNode.
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    (this.tail = newTail), (this.tail.next = null), this.length--;

    if (this.length === 0) this.head = this.tail = null;
  }
}

const list = new SinglyLinkedList();
list.push(12);
list.push(14);
list.push(15);
list.push(17);
list.push(170);
list.pop();
list.pop();
console.log(JSON.stringify(list, "", 2));
