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
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentRoot = this.root;
    while (true) {
      if (value === currentRoot.value) return undefined;

      if (value < currentRoot.value) {
        if (!currentRoot.left) {
          currentRoot.left = newNode;
          return;
        }
        currentRoot = currentRoot.left;
      } else {
        if (!currentRoot.right) {
          currentRoot.right = newNode;
          return;
        }
        currentRoot = currentRoot.right;
      }
    }
  }

  find(value) {
    if (!this.root) return undefined;

    let currentNode = this.root;
    while (true) {
      if (currentNode.value === value) return currentNode;
      if (value < currentNode.value) {
        if (!currentNode.left) return undefined;
        if (value === currentNode.left.value) return currentNode.left;
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) return undefined;
        if (value === currentNode.right.value) return currentNode.right;
        currentNode = currentNode.right;
      }
    }
  }
}

const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(20);
tree.insert(2);
tree.insert(34);
tree.insert(0);
console.log(tree.find(340));
// console.log(tree);
