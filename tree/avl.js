class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVL {
  constructor(root) {
    this.root = root || null;
  }

  getHeight(node) {
    if (!node) return 0;
    return node.height;
  }

  getBalanceFactor() {}

  insert(value, node = this.root) {
    if (!node) {
      return new Node(value);
    } else if (value < node.value) node.left = this.insert(value, node.left);
    else node.right = this.insert(value, node.right);

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    return node;
  }
}

const avl = new AVL(new Node(50));
avl.insert(20);
avl.insert(10);
avl.insert(100);

console.dir(avl, { depth: null });
