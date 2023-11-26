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

  #updateHeight(node) {
    node.height = 1 + Math.max(node.left?.height || 0, node.right?.height || 0);
  }

  #getBalanceFactor(node) {
    return (node.left?.height || 0) - (node.right?.height || 0);
  }

  #leftRotate(node) {
    const newNode = node.right;
    node.right = newNode.left;
    newNode.left = node;

    this.#updateHeight(node); // Important: Must update the height of the existing node first because after the shift it's position is changed and it's now the child of newNode. Hence, to calculate the parent's height child's height must be calculated first.
    this.#updateHeight(newNode);

    return newNode;
  }

  #rightRotate(node) {
    const newNode = node.left;
    node.left = newNode.right;
    newNode.right = node;

    this.#updateHeight(node);
    this.#updateHeight(newNode);

    return newNode;
  }

  insert(value) {
    this.root = this.#insert(value, this.root);
  }

  #insert(value, node) {
    if (!node) return new Node(value);
    if (value < node.value) node.left = this.#insert(value, node.left);
    if (value > node.value) node.right = this.#insert(value, node.right);

    this.#updateHeight(node);
    const balanceFactor = this.#getBalanceFactor(node);

    if (balanceFactor > 1) {
      // left heavy
      if (value < node.left.value) {
        // Note: Since the value is smaller than node.left then it might be added in the branch node.left.left. That means it's a LL Imbalance
        // Part: LL Imbalance
        return this.#rightRotate(node);
      } else {
        // Part: LR Imbalance
        // left rotate
        node.left = this.#leftRotate(node.left);
        // right rotate
        return this.#rightRotate(node);
      }
    }

    if (balanceFactor < -1) {
      // right heavy
      if (value > node.right.value) {
        // Part: RR Imbalance
        // left rotate
        return this.#leftRotate(node);
      } else {
        // Part: RL Imbalance
        // right rotate
        node.right = this.#rightRotate(node.right);
        // left rotate
        return this.#leftRotate(node);
      }
    }

    return node;
  }
}

const avl = new AVL();
avl.insert(10);
avl.insert(20);
avl.insert(30);
avl.insert(30);
avl.insert(30);

console.dir(avl, { depth: null });
