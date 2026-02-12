class Graph {
    constructor() {
        // Map stores vertices as keys and arrays of neighbors as values
        this.adjacencyList = new Map();
    }

    // Adds a new vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    // Adds an edge between two vertices
    addEdge(v1, v2) {
        if (!this.adjacencyList.has(v1)) this.addVertex(v1);
        if (!this.adjacencyList.has(v2)) this.addVertex(v2);

        this.adjacencyList.get(v1).push(v2);
        this.adjacencyList.get(v2).push(v1); // Remove this for a directed graph
    }

    // Removes an edge between two vertices
    removeEdge(v1, v2) {
        if (this.adjacencyList.has(v1)) {
            this.adjacencyList.set(v1, this.adjacencyList.get(v1).filter(v => v !== v2));
        }
        if (this.adjacencyList.has(v2)) {
            this.adjacencyList.set(v2, this.adjacencyList.get(v2).filter(v => v !== v1));
        }
    }

    // Removes a vertex and all its associated edges
    removeVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) return;

        // Remove all edges connected to this vertex
        for (let neighbor of this.adjacencyList.get(vertex)) {
            this.removeEdge(vertex, neighbor);
        }
        this.adjacencyList.delete(vertex);
    }

    breadthFirstSearch() {

    }

    depthFirstSearch() {
        
    }
}

// TODO:
// Weighted Graphs: Store neighbors as objects or pairs containing the vertex and the edge weight (e.g., this.adjacencyList.get(v1).push({ node: v2, weight: 10 })).
// Unique Neighbors: Use a Set instead of an Array for the neighbor list to automatically prevent duplicate edges and achieve faster edge lookups.
