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

  getInOrderSuccessor(node) {
    while (node.left) node = node.left;
    return node;
  }

  getHeight(node) {
    if (!node) return 0;
    return node.height;
  }

  getBalanceFactor(node) {
    if (!node) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  rightRotate(node) {
    const newNode = node.left;
    node.left = newNode.right;
    newNode.right = node;

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    newNode.height =
      1 + Math.max(this.getHeight(newNode.left), this.getHeight(newNode.right));

    return newNode;
  }

  leftRotate(node) {
    const newNode = node.right;
    node.right = newNode.left;
    newNode.left = node;

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    newNode.height =
      1 + Math.max(this.getHeight(newNode.left), this.getHeight(newNode.right));

    return newNode;
  }

  insert(value) {
    this.root = this.#insert(value, this.root);
  }

  #insert(value, node) {
    if (!node) {
      return new Node(value);
    } else if (value < node.value) node.left = this.#insert(value, node.left);
    else node.right = this.#insert(value, node.right);

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    const balanceFactor = this.getBalanceFactor(node);

    if (balanceFactor > 1) {
      if (value < node.left.value)
        return this.rightRotate(node); // Note: Do right rotation
      else {
        // Note: Do left then right rotation
        node.left = this.leftRotate(node.left);
        return this.rightRotate(node);
      }
    }

    if (balanceFactor < -1) {
      if (value > node.right.value) {
        return this.leftRotate(node); // Note: Do left rotation
      } else {
        // Remark: Else do right then left
        node.right = this.rightRotate(node.right);
        return this.leftRotate(node);
      }
    }

    return node;
  }

  find(value) {
    if (!this.root) return undefined;

    let currentNode = this.root;
    while (currentNode && currentNode.value !== value) {
      if (value < currentNode.value) currentNode = currentNode.left;
      else currentNode = currentNode.right;
    }

    return currentNode || undefined;
  }

  delete(value) {
    this.root = this.#delete(value, this.root);
  }

  #delete(value, node) {
    if (!node) return node;

    if (node.value === value) {
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      const inOrderSuccessor = this.getInOrderSuccessor(node.right);

      node.value = inOrderSuccessor.value;
      node.right = this.#delete(inOrderSuccessor.value, node.right);
    } else if (value < node.value) node.left = this.#delete(value, node.left);
    else node.right = this.#delete(value, node.right);

    return node;
  }
}

const avl = new AVL();

avl.insert(10);
avl.insert(20);
avl.insert(30);
avl.insert(25);
avl.insert(27);
avl.insert(29);
avl.insert(15);
avl.insert(12);
avl.insert(17);
avl.insert(19);
avl.insert(22);

// console.log(avl.find(30));
console.dir(avl, { depth: null });
avl.delete(20);
console.dir(avl, { depth: null });
