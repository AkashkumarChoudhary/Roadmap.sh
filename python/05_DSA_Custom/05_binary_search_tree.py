"""
05_binary_search_tree.py

This module covers Binary Search Tree (BST) implementation.
"""

# -----------------------------------------------------------------------------
# 1. Node Class
# -----------------------------------------------------------------------------

class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

# -----------------------------------------------------------------------------
# 2. Insert Operation
# -----------------------------------------------------------------------------

def insert(root, key):
    if root is None:
        return Node(key)
    else:
        if root.val < key:
            root.right = insert(root.right, key)
        else:
            root.left = insert(root.left, key)
    return root

# -----------------------------------------------------------------------------
# 3. Inorder Traversal (Sorted Order)
# -----------------------------------------------------------------------------

def inorder(root):
    if root:
        inorder(root.left)
        print(root.val, end=" ")
        inorder(root.right)

# -----------------------------------------------------------------------------
# 4. Search Operation
# -----------------------------------------------------------------------------

def search(root, key):
    if root is None or root.val == key:
        return root

    if root.val < key:
        return search(root.right, key)

    return search(root.left, key)

# -----------------------------------------------------------------------------
# 5. Testing
# -----------------------------------------------------------------------------

print("--- Binary Search Tree ---")
r = Node(50)
r = insert(r, 30)
r = insert(r, 20)
r = insert(r, 40)
r = insert(r, 70)
r = insert(r, 60)
r = insert(r, 80)

print("Inorder traversal of the given tree")
inorder(r)
print()

print("\nSearch for 60:")
result = search(r, 60)
if result:
    print("Found")
else:
    print("Not Found")
