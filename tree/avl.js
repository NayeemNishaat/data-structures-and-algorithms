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

  getBalanceFactor(node) {
    if (!node) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  insert(value, node = this.root) {
    if (!node) {
      return new Node(value);
    } else if (value < node.value) node.left = this.insert(value, node.left);
    else node.right = this.insert(value, node.right);

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    const balanceFactor = this.getBalanceFactor(node);
    console.log(balanceFactor, node);

    return node;
  }
}

const avl = new AVL(new Node(20));
avl.insert(10);
avl.insert(40);
avl.insert(25);
avl.insert(30);

// console.dir(avl, { depth: null });
