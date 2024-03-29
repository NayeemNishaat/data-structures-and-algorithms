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

  removeNode(current, value) {
    if (current === null) return current;

    // Part: Match Found
    if (value === current.value) {
      // Subpart: No Child or One Child
      if (current.left === null && current.right === null) return null;
      else if (current.left === null) return current.right;
      else if (current.right === null) return current.left;
      // Subpart: Two Children
      else {
        // Subpart: Get the Smallest Node in the Right Subtree
        let tempNode = this.kthSmallestNode(current.right);
        current.value = tempNode.value;

        // Subpart: Delete the Inorder Successor
        current.right = this.removeNode(current.right, tempNode.value);
        return current;
      }
    } else if (value < current.value) {
      current.left = this.removeNode(current.left, value);
      return current;
    } else {
      current.right = this.removeNode(current.right, value);
      return current;
    }
  }

  // Subpart: Get the Inorder Successor
  kthSmallestNode(node) {
    while (!node.left === null) node = node.left;
    return node;
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

    // let x = this.root;
    // while (x !== undefined && value !== x.value) {
    //   if (value < x.value) x = x.left;
    //   else x = x.right;
    // }
    // return x;
  }

  bfs() {
    const queue = [],
      result = [];
    let current = this.root;

    if (!this.root) return result;
    queue.push(current);

    while (queue.length) {
      current = queue.shift(); // Remark: It's not a good idea to declare variables in a loop because that creates the variables each time the loop runs hence, waste of memory!

      result.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return result;
  }

  dfsPre() {
    const result = [];

    function traverse(node) {
      result.push(node.value),
        node.left && traverse(node.left),
        node.right && traverse(node.right);
    }
    traverse(this.root);
    return result;
  }

  dfsPost() {
    const result = [];
    const traverse = (node) => (
      node.left && traverse(node.left),
      node.right && traverse(node.right),
      result.push(node.value)
    );
    traverse(this.root);
    return result;
  }

  dfsIn() {
    const result = [];

    const traverse = function (node) {
      node.left && traverse(node.left),
        result.push(node.value),
        node.right && traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
}

const tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.bfs());
console.log(tree.dfsPre());
console.log(tree.dfsPost());
console.log(tree.dfsIn());
