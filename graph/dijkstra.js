class graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return;
    if (!this.adjacencyList[v1].find(({ node }) => node === v2))
      this.adjacencyList[v1].push({ node: v2, weight });
    if (!this.adjacencyList[v2].find(({ node }) => node === v1))
      this.adjacencyList[v2].push({ node: v1, weight });
  }

  removeEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return;
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      ({ node }) => node !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      ({ node }) => node !== v1
    );
  }

  removeVertex(v) {
    if (!this.adjacencyList[v]) return;
    this.adjacencyList[v].forEach((edge) => this.removeEdge(v, edge.node));
    delete this.adjacencyList[v];
  }

  dfsRecursuve(vertex) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      result.push(vertex);
      visited[vertex] = true;
      adjacencyList[vertex].forEach(({ node }) => !visited[node] && dfs(node));
    })(vertex);

    return result;
  }

  // dfsIterative(vertex) {
  //   const result = [];
  //   const visited = {};
  //   const stack = [vertex];
  //   let vtx;

  //   while (stack.length) {
  //     vtx = stack.pop();

  //     if (!visited[vtx]) {
  //       result.push(vtx);
  //       visited[vtx] = true;
  //       stack.push(...this.adjacencyList[vtx].filter((v) => !visited[v]));
  //       // stack.push(
  //       //   ...this.adjacencyList[vtx].reverse().filter((v) => !visited[v])
  //       // );
  //     }
  //   }
  //   return result;
  // }

  // bfs(vertex) {
  //   const queue = [vertex];
  //   const result = [];
  //   const visited = {};
  //   let vtx;

  //   while (queue.length) {
  //     vtx = queue.shift();

  //     if (!visited[vtx]) {
  //       result.push(vtx);
  //       visited[vtx] = true;
  //       // queue.push(...this.adjacencyList[vtx].filter((v) => !visited[v])); // Note: L-R
  //       queue.push(
  //         ...this.adjacencyList[vtx].reverse().filter((v) => !visited[v])
  //       ); // Note: R-L
  //     }
  //   }
  //   return result;
  // }
}

const g = new graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B", 7);
g.addEdge("A", "C", 5);
g.addEdge("B", "D", 3);
g.addEdge("C", "E", 1);
g.addEdge("D", "E", 9);
g.addEdge("D", "F", 5);
g.addEdge("E", "F", 7);
// g.removeEdge("E", "F");
// g.removeVertex("A");
console.log(g.dfsRecursuve("A"));
// console.log(g.dfsIterative("A"));
// console.log(g.bfs("A"));
