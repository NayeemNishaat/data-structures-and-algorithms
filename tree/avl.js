class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.bf = 0;
  }
}

class AVL {
  constructor(root) {
    this.root = root || null;
  }

  getHeight() {}

  balanceFactor() {
    function visit(n) {
      let height = 1;

      function traverse(node) {
        if (!node) return 0;

        if (node.left) {
          height++;
          traverse(node.left);
        }

        if (node.right) {
          height++;
          traverse(node.right);
        }
        return height;
      }

      const leftHeight = traverse(n.left);
      const rightHeight = traverse(n.right);
      n.bf = leftHeight - rightHeight;

      if (n.left) visit(n.left);
      if (n.right) visit(n.right);
    }
    visit(this.root);
  }

  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return;
    }

    let currentRoot = this.root;
    while (true) {
      if (value < currentRoot.value) {
        if (!currentRoot.left) {
          currentRoot.left = node;

          this.balanceFactor();

          return;
        }
        currentRoot = currentRoot.left;
      } else {
        if (value > currentRoot.value) {
          if (!currentRoot.right) {
            currentRoot.right = node;
            return;
          }
        }
        currentRoot = currentRoot.right;
      }
    }
  }
}

const node = new Node(20);
node.left = new Node(10);
node.right = new Node(40);
node.right.left = new Node(25);
node.right.left.right = new Node(30);

const avl = new AVL(node);

avl.balanceFactor();

console.dir(avl, { depth: null });
