class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) this.root = newNode;

    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;

      if (value < current.value) {
        if (current.left === null) current.left = newNode;
        current = current.left;
      } else {
        if (current.right === null) current.right = newNode;
        current = current.right;
      }
    }
  }
}

const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(13);

console.log(tree);
