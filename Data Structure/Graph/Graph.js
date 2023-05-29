// Graph implementation
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");

//Topological sorting
//Topological sorting only works for DAG (directed acyclic graph) : a directed graph with no directed cycles

//resources: https://adelachao.medium.com/graph-topological-sort-javascript-implementation-1cc04e10f181

function dfsTopSortHelper(v, n, visited, topNums) {
  visited[v] = true;
  const neighbors = graph.adjacencyList[v];
  for (const neighbor of neighbors) {
    if (!visited[neighbor]) {
      n = dfsTopSortHelper(neighbor, n, visited, topNums);
    }
  }
  topNums[v] = n;
  return n - 1;
}

function dfsTopSort(graph) {
  const vertices = Object.keys(graph.adjacencyList);
  const visited = {};
  const topNums = {};
  let n = vertices.length - 1;
  for (const v of vertices) {
    if (!visited[v]) {
      n = dfsTopSortHelper(v, n, visited, topNums);
    }
  }
  return topNums;
}

console.log(dfsTopSort(graph));
// { E: 4,
//   D: 3,
//   B: 2,
//   C: 1,
//   A: 0 }
