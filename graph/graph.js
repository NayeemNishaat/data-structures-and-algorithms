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

  removeEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return;
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(v) {
    if (!this.adjacencyList[v]) return;
    this.adjacencyList[v].forEach((edge) => this.removeEdge(v, edge));
    delete this.adjacencyList[v];
  }
}

const g = new graph();

g.addVertex("dhaka");
g.addVertex("tokyo");
g.addVertex("aspin");
g.addVertex("ankara");
g.addEdge("dhaka", "tokyo");
g.addEdge("dhaka", "tokyo");
g.addEdge("dhaka", "aspin");
g.addEdge("ankara", "dhaka");
g.removeEdge("aspin", "dhaka");
g.removeVertex("aspin");
g.removeVertex("ankara");
console.log(g.adjacencyList);
