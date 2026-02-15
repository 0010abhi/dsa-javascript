##### Iterative DFS
- Tree
function iterativeDFS(root):
    if root is null:
        return []
    
    stack = []
    result = []
    stack.push(root)
    
    while stack is not empty:
        node = stack.pop()
        result.append(node.value) // Process the node

        // Push children onto the stack
        // For a binary tree, push right child first so left child is processed next
        if node.right is not null:
            stack.push(node.right)
        if node.left is not null:
            stack.push(node.left)
            
    return result

- Graph
DFS_Iterative(G, start_node):
  let S be a stack
  S.push(start_node)
  mark start_node as visited
  while (S is not empty):
    v = S.pop()
    // Process node v (e.g., print v)
    for all neighbours w of v in Graph G:
      if w is not visited:
        S.push(w)
        mark w as visited

##### DFS (recursive)
- Tree
dfs(node)
    if node is null
        return
    
    // process the current node
    
    dfs(node.left)
    dfs(node.right)

- Graph
dfs(node, visited)
    if node in visited
        return
    
    visited.add(node)
    
    for neighbor in node.neighbors
        dfs(neighbor, visited)


