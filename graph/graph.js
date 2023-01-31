class graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return;
    if (!this.adjacencyList[v1].includes(v2)) this.adjacencyList[v1].push(v2);
    if (!this.adjacencyList[v2].includes(v1)) this.adjacencyList[v2].push(v1);
  }
}

const g = new graph();

g.addVertex("dhaka");
g.addVertex("tokyo");
g.addVertex("aspin");
g.addEdge("dhaka", "tokyo");
g.addEdge("dhaka", "tokyo");
g.addEdge("dhakaa", "aspin");
console.log(g.adjacencyList);
