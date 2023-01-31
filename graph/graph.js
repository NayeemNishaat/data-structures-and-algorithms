class graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
}

const g = new graph();

g.addVertex("dhaka");
g.addVertex("tokyo");
g.addVertex("aspin");
g.addEdge("dhaka", "tokyo");
g.addEdge("dhaka", "aspin");
console.log(g.adjacencyList);
