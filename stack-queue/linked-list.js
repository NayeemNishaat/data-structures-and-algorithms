class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) (this.first = newNode), (this.last = newNode);
    else (this.first.next = this.first), (this.first = newNode);

    return ++this.size;
  }
}
