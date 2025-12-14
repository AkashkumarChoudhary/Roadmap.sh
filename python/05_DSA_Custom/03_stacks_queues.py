"""
03_stacks_queues.py

This module covers Stacks and Queues implementation.
"""

# -----------------------------------------------------------------------------
# 1. Stack (LIFO - Last In First Out)
# -----------------------------------------------------------------------------
# You can use a list as a stack.

print("--- Stack Implementation (using List) ---")
stack = []

# Push
stack.append('a')
stack.append('b')
stack.append('c')
print(f"Initial Stack: {stack}")

# Pop
print(f"Popped: {stack.pop()}")
print(f"Popped: {stack.pop()}")
print(f"Stack after elements are popped: {stack}")

# -----------------------------------------------------------------------------
# 2. Queue (FIFO - First In First Out)
# -----------------------------------------------------------------------------
# While lists can be used as queues, they are not efficient for this purpose.
# Use collections.deque for fast appends and pops from both ends.

from collections import deque

print("\n--- Queue Implementation (using deque) ---")
queue = deque(["Eric", "John", "Michael"])
print(f"Initial Queue: {queue}")

# Enqueue
queue.append("Terry")
queue.append("Graham")
print(f"Queue after append: {queue}")

# Dequeue
print(f"Dequeued: {queue.popleft()}")
print(f"Dequeued: {queue.popleft()}")
print(f"Queue after dequeue: {queue}")
