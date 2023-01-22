class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) (this.first = newNode), (this.last = newNode);
    else (this.last.next = newNode), (this.last = newNode), this.length++;
  }
}
