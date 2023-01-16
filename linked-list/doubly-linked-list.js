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

  shift() {
    if (!this.head) return undefined;
    const shifted = this.head;
    if (this.length === 1) {
      (this.head = this.tail = null), this.length--;
      return shifted;
    }

    this.head = shifted.next;
    (this.head.prev = shifted.next = null), this.length--;
    return shifted;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      (this.head = this.tail = newNode), this.length++;
      return;
    }

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index <= Math.floor(index / 2)) {
      let init = this.head;
      let counter = 0;
      while (init) {
        if (counter === index) return init;
        counter++, (init = init.next);
      }
    } else {
      let init = this.tail;
      let counter = this.length - 1;
      while (init) {
        if (counter === index) return init;
        counter--, (init = init.prev);
      }
    }
  }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.pop();
list.shift();
list.unshift(1);
list.push(3);
list.push(4);

console.log(list.get(3));
