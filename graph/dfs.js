const { DirectedGraph, Vertex } = require("./directed");

const graph = new DirectedGraph();

const vertexA = new Vertex("A");
const vertexB = new Vertex("B");
const vertexC = new Vertex("C");
const vertexD = new Vertex("D");

graph.addVertex(vertexA);
graph.addVertex(vertexB);
graph.addVertex(vertexC);
graph.addVertex(vertexD);

graph.addEdge(vertexA, vertexB, 1);
graph.addEdge(vertexB, vertexC, 2);
graph.addEdge(vertexC, vertexD, 3);

const dfs = (vertex, target, visited = new Set()) => {
  if (visited.has(vertex.value)) {
    return false;
  }

  if (vertex.value === target) {
    return true;
  }

  visited.add(vertex.value);

  for (const [neighbourValue, weight] of graph.getEdges(vertex)) {
    const neighbour = graph.vertices.get(neighbourValue);
    if (dfs(neighbour, target, visited)) {
      return true;
    }
  }

  return false;
};

console.log(dfs(vertexA, "D"));
// Output: true
