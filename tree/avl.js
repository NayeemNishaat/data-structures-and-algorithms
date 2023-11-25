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

  rightRotate(node) {
    const newNode = node.left;
    node.left = newNode.right;
    newNode.right = node;

    // const newNode = node.left;
    // const r = newNode.right;
    // newNode.right = node;
    // node.left = r;

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

    // const newNode = node.right;
    // const l = newNode.left;
    // newNode.left = node;
    // node.right = l;

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    newNode.height =
      1 + Math.max(this.getHeight(newNode.left), this.getHeight(newNode.right));

    return newNode;
  }

  insert(value, node) {
    if (!node) {
      return new Node(value);
    } else if (value < node.value) node.left = this.insert(value, node.left);
    else node.right = this.insert(value, node.right);

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
}

const avl = new AVL();
let root = null;
root = avl.insert(10, root);
root = avl.insert(20, root);
root = avl.insert(30, root);
root = avl.insert(25, root);
root = avl.insert(27, root);
root = avl.insert(29, root);

console.dir(root, { depth: null });
