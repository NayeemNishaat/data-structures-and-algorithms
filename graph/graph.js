class graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }
}

const g = new graph();

g.addVertex("abc");
console.log(g.adjacencyList);
