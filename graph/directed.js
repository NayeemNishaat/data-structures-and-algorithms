class Vertex {
  constructor(value) {
    this.value = value;
    this.edges = new Map();
  }
}

class DirectedGraph {
  constructor() {
    this.vertices = new Map();
  }

  addVertex(vertex) {
    this.vertices.set(vertex.value, vertex);
  }

  addEdge(fromVertex, toVertex, weight = 0) {
    if (!this.vertices.has(fromVertex.value)) {
      this.addVertex(fromVertex);
    }

    if (!this.vertices.has(toVertex.value)) {
      this.addVertex(toVertex);
    }

    this.vertices.get(fromVertex.value).edges.set(toVertex.value, weight);
  }

  getVertices() {
    return Array.from(this.vertices.values());
  }

  getEdges(vertex) {
    return Array.from(vertex.edges.entries());
  }

  getWeight(fromVertex, toVertex) {
    return this.vertices.get(fromVertex.value).edges.get(toVertex.value);
  }
}

module.exports = {
  DirectedGraph,
  Vertex
};
