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
    else (newNode.next = this.first), (this.first = newNode);

    return ++this.size; // Important: Increments first, then returns
  }

  pop() {
    if (!this.first) return undefined;
    const { val } = this.first;
    if (this.first === this.last) this.last = null;

    this.first = this.first.next;
    this.size--;

    return val;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
