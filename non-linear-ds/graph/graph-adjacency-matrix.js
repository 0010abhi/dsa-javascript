class Graph {
    constructor(numNodes) {
        // Initialize the matrix as a 2D array filled with 0s
        this.matrix = [];
        this.numNodes = numNodes;
        for (let i = 0; i < numNodes; i++) {
            // Push a new row (array) for each vertex, initialized to 0s
            this.matrix.push(new Array(numNodes).fill(0));
        }
    }

    // Add an edge between two nodes
    addEdge(node1, node2) {
        if (node1 >= 0 && node1 < this.numNodes && node2 >= 0 && node2 < this.numNodes) {
            // For an undirected graph, set both matrix[node1][node2] and matrix[node2][node1] to 1
            this.matrix[node1][node2] = 1;
            this.matrix[node2][node1] = 1;
        }
    }

    // Check if an edge exists between two nodes
    hasEdge(node1, node2) {
        if (node1 >= 0 && node1 < this.numNodes && node2 >= 0 && node2 < this.numNodes) {
            // Check if either direction has a connection
            return this.matrix[node1][node2] === 1; // Since it's undirected, checking one direction is enough if consistently added
        }
        return false;
    }

    // Remove an edge between two nodes
    removeEdge(node1, node2) {
        if (this.hasEdge(node1, node2)) {
            // Set both entries back to 0
            this.matrix[node1][node2] = 0;
            this.matrix[node2][node1] = 0;
        }
    }

    // Print the adjacency matrix
    printGraph() {
        for (let i = 0; i < this.numNodes; i++) {
            console.log(this.matrix[i].join(' '));
        }
    }
}

// Example Usage:
const numVertices = 4;
const graph = new Graph(numVertices);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(1, 3);

console.log("Graph Adjacency Matrix:");
graph.printGraph();

console.log(`\nEdge between 0 and 3 exists: ${graph.hasEdge(0, 3)}`); // Output: false
console.log(`Edge between 0 and 1 exists: ${graph.hasEdge(0, 1)}`); // Output: true
