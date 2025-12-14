"""
03_searching.py

This module covers Searching Algorithms.
"""

# -----------------------------------------------------------------------------
# 1. Linear Search
# -----------------------------------------------------------------------------
# Linear Search is a very simple search algorithm. In this type of search, a sequential search is made over all items one by one.

def linear_search(arr, x):
    for i in range(len(arr)):
        if arr[i] == x:
            return i
    return -1

print("--- Linear Search ---")
arr = [2, 3, 4, 10, 40]
x = 10
result = linear_search(arr, x)
if result != -1:
    print(f"Element {x} is present at index {result}")
else:
    print(f"Element {x} is not present in array")

# -----------------------------------------------------------------------------
# 2. Binary Search
# -----------------------------------------------------------------------------
# Search a sorted array by repeatedly dividing the search interval in half.

def binary_search(arr, low, high, x):
    if high >= low:
        mid = (high + low) // 2
        if arr[mid] == x:
            return mid
        elif arr[mid] > x:
            return binary_search(arr, low, mid - 1, x)
        else:
            return binary_search(arr, mid + 1, high, x)
    else:
        return -1

print("\n--- Binary Search ---")
arr = [2, 3, 4, 10, 40]
x = 10
result = binary_search(arr, 0, len(arr)-1, x)
if result != -1:
    print(f"Element {x} is present at index {result}")
else:
    print(f"Element {x} is not present in array")
