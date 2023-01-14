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

    return current; // Note: current is the last node which is removed
  }

  shift() {
    if (!this.head) return undefined;

    const current = this.head;
    (this.head = current.next), this.length--;

    if (this.length === 0) this.tail = null;

    return current;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) this.head = this.tail = newNode;
    else (newNode.next = this.head), (this.head = newNode);
    this.length++;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.tail;

    let counter = 0;
    let target = this.head;
    while (counter !== index) (target = target.next), counter++;
    return target;
  }

  set(index, val) {
    const node = this.get(index);

    if (node) {
      node.val = val;
      return true;
    }
    return false;
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
list.shift();
list.shift();
list.unshift(100);
list.unshift(110);
list.unshift(150);
list.get(0);
list.set(1, "new");

console.log(JSON.stringify(list, "", 2));
