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

  dfsRecursuve(vertex) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    function dfs(vertex) {
      if (!adjacencyList[vertex]) return;

      result.push(vertex);
      visited[vertex] = true;

      adjacencyList[vertex].forEach((vtx) => !visited[vtx] && dfs(vtx));
    }
    dfs(vertex);

    return result;
  }
}

const g = new graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g.dfsRecursuve("A"));
