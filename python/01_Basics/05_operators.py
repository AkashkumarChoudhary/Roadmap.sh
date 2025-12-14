"""
05_operators.py

This module covers Python operators.
"""

# -----------------------------------------------------------------------------
# 1. Arithmetic Operators
# -----------------------------------------------------------------------------
# Used with numeric values to perform common mathematical operations.

print("--- Arithmetic Operators ---")
x = 10
y = 3

print(f"x + y = {x + y}")   # Addition
print(f"x - y = {x - y}")   # Subtraction
print(f"x * y = {x * y}")   # Multiplication
print(f"x / y = {x / y}")   # Division (float)
print(f"x % y = {x % y}")   # Modulus (Remainder)
print(f"x ** y = {x ** y}") # Exponentiation (Power)
print(f"x // y = {x // y}") # Floor division

# -----------------------------------------------------------------------------
# 2. Assignment Operators
# -----------------------------------------------------------------------------
# Used to assign values to variables.

print("\n--- Assignment Operators ---")
x = 5
print(f"x = 5 -> {x}")
x += 3
print(f"x += 3 -> {x}")
x -= 3
print(f"x -= 3 -> {x}")

# -----------------------------------------------------------------------------
# 3. Comparison Operators
# -----------------------------------------------------------------------------
# Used to compare two values. Returns True or False.

print("\n--- Comparison Operators ---")
x = 5
y = 3
print(f"{x} == {y} : {x == y}")  # Equal
print(f"{x} != {y} : {x != y}")  # Not equal
print(f"{x} > {y} : {x > y}")    # Greater than
print(f"{x} < {y} : {x < y}")    # Less than

# -----------------------------------------------------------------------------
# 4. Logical Operators
# -----------------------------------------------------------------------------
# Used to combine conditional statements.

print("\n--- Logical Operators ---")
x = 5
print(f"x = {x}")
print(f"(x > 3 and x < 10) : {x > 3 and x < 10}") # Returns True if both statements are true
print(f"(x > 3 or x < 4) : {x > 3 or x < 4}")     # Returns True if one of the statements is true
print(f"not(x > 3 and x < 10) : {not(x > 3 and x < 10)}") # Reverse the result
