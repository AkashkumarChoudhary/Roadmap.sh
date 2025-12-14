"""
04_list_comprehensions.py

This module covers List Comprehensions.
"""

# -----------------------------------------------------------------------------
# 1. List Comprehension Syntax
# -----------------------------------------------------------------------------
# List comprehension offers a shorter syntax when you want to create a new list based on the values of an existing list.
# Syntax: [expression for item in iterable if condition == True]

fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
print("--- Original List ---")
print(fruits)

# Example: Create a new list containing only fruits with the letter "a" in the name.

# Without List Comprehension
newlist = []
for x in fruits:
  if "a" in x:
    newlist.append(x)

print("\n--- Without List Comprehension ---")
print(newlist)

# With List Comprehension
newlist = [x for x in fruits if "a" in x]

print("\n--- With List Comprehension ---")
print(newlist)

# -----------------------------------------------------------------------------
# 2. More Examples
# -----------------------------------------------------------------------------

# Set all values to upper case
newlist = [x.upper() for x in fruits]
print("\n--- Upper Case ---")
print(newlist)

# Return "orange" instead of "banana"
newlist = [x if x != "banana" else "orange" for x in fruits]
print("\n--- Conditional Expression ---")
print(newlist)
