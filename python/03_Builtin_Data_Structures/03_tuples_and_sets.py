"""
03_tuples_and_sets.py

This module covers Tuples and Sets.
"""

# -----------------------------------------------------------------------------
# 1. Tuples
# -----------------------------------------------------------------------------
# A tuple is a collection which is ordered and unchangeable.

thistuple = ("apple", "banana", "cherry")
print("--- Tuples ---")
print(thistuple)

# Access Items
print(f"Item at index 1: {thistuple[1]}")

# Unpacking a Tuple
print("\n--- Unpacking Tuple ---")
(green, yellow, red) = thistuple
print(green)
print(yellow)
print(red)

# -----------------------------------------------------------------------------
# 2. Sets
# -----------------------------------------------------------------------------
# A set is a collection which is unordered, unchangeable*, and unindexed.
# *Note: Set items are unchangeable, but you can remove items and add new items.

thisset = {"apple", "banana", "cherry"}
print("\n--- Sets ---")
print(thisset)

# Add Items
thisset.add("orange")
print("\n--- Adding to Set ---")
print(thisset)

# Remove Items
thisset.remove("banana")
print("\n--- Removing from Set ---")
print(thisset)

# Loop
print("\n--- Looping Set ---")
for x in thisset:
  print(x)
