"""
01_arrays.py

This module covers Arrays in Python.
"""

# -----------------------------------------------------------------------------
# 1. Arrays vs Lists
# -----------------------------------------------------------------------------
# Python does not have built-in support for Arrays, but Python Lists can be used instead.
# However, to work with arrays in Python you will have to import a library, like the NumPy library.
# Python also has a built-in module called array, but it's rarely used compared to Lists or NumPy.

import array

print("--- Built-in Array Module ---")
# 'i' represents signed integer
arr = array.array('i', [1, 2, 3, 4, 5])

print(f"Array: {arr}")
print(f"Type: {type(arr)}")

# Accessing
print(f"First element: {arr[0]}")

# Modifying
arr[0] = 10
print(f"Modified Array: {arr}")

# -----------------------------------------------------------------------------
# 2. Lists as Arrays
# -----------------------------------------------------------------------------
# In Python, lists are dynamic arrays.

print("\n--- Lists as Arrays ---")
cars = ["Ford", "Volvo", "BMW"]
print(cars)

cars.append("Honda")
print(f"After Append: {cars}")

cars.pop(1)
print(f"After Pop(1): {cars}")
