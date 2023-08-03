class Node {
  constructor(key, data) {
    this.key = key;
    this.data = data;
    this.children = [];
  }
}

class GeneralTree {
  constructor() {
    this.root = null;
  }

  // helper to print the tree as string
  printTreeAsString() {
    if (!this.root) throw new Error("Tree is empty");

    const getTreeString = (node = this.root, spaceCount = 0) => {
      let treeString = "\n";

      node.children.forEach((child) => {
        treeString += `${" ".repeat(spaceCount)}● node | key: ${child.key} - ${
          child.data
        } ${getTreeString(child, spaceCount + 4)}`;
      });

      return treeString;
    };

    return console.log(
      `\n ● node | key: ${this.root.key} - ${this.root.data} ${getTreeString(
        this.root,
        4
      )}`
    );
  }

  // Iterative level-order traversal
  levelOrderTraversalIterative() {
    // Check if the tree is empty
    if (!this.root) throw new Error("Tree is empty");

    // Initialize a queue to keep track of nodes to be visited, an array to store results, and a count for the current level
    const queue = [{ node: this.root, level: 0 }];
    const result = [[]];
    let currentLevel = 0;

    // Iterate over the queue while it's not empty
    while (queue.length) {
      // Remove the first node from the queue and add its data to the result array
      const { node, level } = queue.shift();
      if (level > currentLevel) {
        currentLevel = level;
        result.push([]);
      }
      result[currentLevel].push(node.data);

      // Add all the children of the current node to the end of the queue, along with their level information
      for (const childNode of node.children) {
        queue.push({ node: childNode, level: level + 1 });
      }
    }

    // Return the result array
    return result;
  }

  // Recursive level-order traversal
  levelOrderTraversalRecursive() {
    // Check if the tree is empty
    if (!this.root) throw new Error("Tree is empty");

    // Initialize an array to store results and an object to keep track of nodes by level
    const result = [];
    const nodesByLevel = {};

    // Define a recursive function to traverse the tree
    function traverse(currentNode, currentLevel) {
      // Base case: if the node is null, return
      if (!currentNode) return;

      // Add the current node's data to the result array for the current level
      if (!nodesByLevel[currentLevel]) {
        nodesByLevel[currentLevel] = [];
        result.push(nodesByLevel[currentLevel]);
      }
      nodesByLevel[currentLevel].push(currentNode.data);

      // Recursively traverse the children of the current node
      for (const childNode of currentNode.children) {
        traverse(childNode, currentLevel + 1);
      }
    }

    // Start the traversal with the root node at level 0
    traverse(this.root, 0);

    // Return the result array
    return result;
  }

  // Iterative pre-order traversal
  preOrderTraversalIterative() {
    // Check if the tree is empty
    if (!this.root) throw new Error("Tree is empty");

    // Create a stack to hold nodes to be processed and
    // an array to hold the result of the traversal
    const stack = [this.root];
    const result = [];

    // Loop through the stack until all nodes have been processed
    while (stack.length) {
      // Pop the last node from the stack and add its data to the result array
      const currentNode = stack.pop();
      result.push(currentNode.data);

      // Since we want to traverse in pre-order,
      // we want to visit the leftmost child first.
      // Since the children array is stored in reverse order
      // in this implementation, we need to push them to stack in reverse.
      for (let i = currentNode.children.length - 1; i >= 0; i--) {
        stack.push(currentNode.children[i]);
      }
    }

    // Return the result array
    return result;
  }

  // Recursive pre-order traversal
  preOrderTraversalRecursive() {
    // Check if the tree is empty
    if (!this.root) throw new Error("Tree is empty");

    // Create an array to hold the result of the traversal
    const result = [];

    // Define a recursive helper function to traverse the tree
    function traverse(currentNode) {
      // If the current node is null, return
      if (!currentNode) return;

      // Add the node's data to the result array
      result.push(currentNode.data);

      // Recursively traverse each of the node's children
      for (const childNode of currentNode.children) {
        traverse(childNode);
      }
    }

    // Call the helper function with the root node to start the traversal
    traverse(this.root);

    // Return the result array
    return result;
  }

  // Iterative post-order traversal
  postOrderTraversalIterative() {
    // Check if the tree is empty
    if (!this.root) throw new Error("Tree is empty");

    // Initialize a stack and a result array
    const stack = [this.root];
    const result = [];

    // Loop through the stack
    while (stack.length) {
      // Get the top of the stack
      const currentNode = stack.pop();

      // Add the current node's data to the result
      result.push(currentNode.data);

      // Push the current node's children to the stack
      for (let i = 0; i < currentNode.children.length; i++) {
        stack.push(currentNode.children[i]);
      }
    }

    // Return the result array, reversed
    return result.reverse();
  }

  // Recursive post-order traversal
  postOrderTraversalRecursive() {
    // Check if the tree is empty
    if (!this.root) throw new Error("Tree is empty");

    // Initialize a result array
    const result = [];

    // Recursive helper function to traverse the tree in post-order
    function traverse(currentNode) {
      if (!currentNode) return;

      // Traverse the children of the current node
      for (const childNode of currentNode.children) {
        traverse(childNode);
      }

      // Add the current node's data to the result
      result.push(currentNode.data);
    }

    // Start the traversal from the root
    traverse(this.root);

    // Return the result array
    return result;
  }
}

const ceo = new Node(1, "#1 CEO");

// Build departments
const operationsManager = new Node(2, "#2 Operations Manager");
const marketingManager = new Node(3, "#3 Marketing Manager");
const financeManager = new Node(4, "#4 Finance Manager");

// add staff to departments
operationsManager.children.push(new Node(5, "#5 Operation Staff"));
marketingManager.children.push(new Node(6, "#6 Marketing Staff"));
marketingManager.children.push(new Node(7, "#7 Content Marketer"));
financeManager.children.push(new Node(8, "#8 Assistant Accountant"));

// link the departments with ceo
ceo.children.push(operationsManager, marketingManager, financeManager);

// create the tree
const tree = new GeneralTree();

// attach the ceo to tree root
tree.root = ceo;

// See the tree as string
tree.printTreeAsString();

console.log("LEVEL-ORDER TRAVERSAL:");
tree.levelOrderTraversalIterative();

console.log("PRE-ORDER TRAVERSAL:");
tree.preOrderTraversalIterative();

console.log("POST-ORDER TRAVERSAL:");
tree.postOrderTraversalIterative();
