
### Graph
- G = (V,E); Where V = vertices, E = Edges

e.g.



1. Directed (e.g. Website Pages Link)

Some math around it 

InDegree(vertices) = lines incoming to it.
OutDegree(vertices) = lines going out of it.

Sum of InDegree = |E|
Sum of OutDegree = |E|

Max number of edges = |V| * (|v| - 1) (excluding self loops)


2. Un-directed Graph (e.g. Social Media Conections)



##### Terminology

Path (walk): 
Simple Path (path): 

Cyclic
Acyclic

Weighted Graph (e.g. Road Networks, Compouter Networks)


# Presentation of Graph
1. Adjacency Matrix
    create a matrix array (m*n) in javascript 
    `Array.from({length: m}, () => new Array(n).fill(-1))`


2. Ajacency List

