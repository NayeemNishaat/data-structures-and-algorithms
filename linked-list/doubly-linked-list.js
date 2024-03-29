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

    let counter, current;
    if (index <= this.length / 2) {
      (current = this.head), (counter = 0);
      while (counter !== index) counter++, (current = current.next);
    } else {
      (current = this.tail), (counter = this.length - 1);
      while (counter !== index) counter--, (current = current.prev);
    }
    return current;
  }

  set(index, val) {
    const found = this.get(index);

    if (found) {
      found.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    if (index === this.length) {
      this.push(val);
      return true;
    }

    const newNode = new Node(val);
    const found = this.get(index - 1);

    newNode.next = found.next;
    found.next.prev = newNode;
    found.next = newNode;
    newNode.prev = found;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift(index);
    if (index === this.length - 1) return this.pop(index);

    const removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.prev = removedNode.next = null;
    this.length--;
    return removedNode;
  }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.set(3, "new");
list.insert(3, "inserted");
list.remove(3);

console.log(list);
