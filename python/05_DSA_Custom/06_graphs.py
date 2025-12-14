"""
06_graphs.py

This module covers Graph Data Structure and Traversal (BFS/DFS).
"""

from collections import defaultdict

# -----------------------------------------------------------------------------
# 1. Graph Class (Adjacency List)
# -----------------------------------------------------------------------------

class Graph:
    def __init__(self):
        self.graph = defaultdict(list)

    def add_edge(self, u, v):
        self.graph[u].append(v)

    # -------------------------------------------------------------------------
    # 2. BFS (Breadth First Search)
    # -------------------------------------------------------------------------
    def bfs(self, s):
        visited = [False] * (max(self.graph) + 1)
        queue = []

        queue.append(s)
        visited[s] = True

        print(f"BFS starting from {s}:", end=" ")

        while queue:
            s = queue.pop(0)
            print(s, end=" ")

            for i in self.graph[s]:
                if visited[i] == False:
                    queue.append(i)
                    visited[i] = True
        print()

    # -------------------------------------------------------------------------
    # 3. DFS (Depth First Search)
    # -------------------------------------------------------------------------
    def dfs_util(self, v, visited):
        visited.add(v)
        print(v, end=' ')

        for neighbour in self.graph[v]:
            if neighbour not in visited:
                self.dfs_util(neighbour, visited)

    def dfs(self, v):
        visited = set()
        print(f"DFS starting from {v}:", end=" ")
        self.dfs_util(v, visited)
        print()

# -----------------------------------------------------------------------------
# 4. Testing
# -----------------------------------------------------------------------------

print("--- Graph Traversal ---")
g = Graph()
g.add_edge(0, 1)
g.add_edge(0, 2)
g.add_edge(1, 2)
g.add_edge(2, 0)
g.add_edge(2, 3)
g.add_edge(3, 3)

g.bfs(2)
g.dfs(2)
