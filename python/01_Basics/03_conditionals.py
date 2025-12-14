"""
03_conditionals.py

This module covers conditional statements (If...Else).
"""

# -----------------------------------------------------------------------------
# 1. If Statement
# -----------------------------------------------------------------------------
# Python supports the usual logical conditions from mathematics:
# Equals: a == b
# Not Equals: a != b
# Less than: a < b
# Less than or equal to: a <= b
# Greater than: a > b
# Greater than or equal to: a >= b

print("--- If Statement ---")
a = 33
b = 200
if b > a:
    print("b is greater than a")

# -----------------------------------------------------------------------------
# 2. Elif
# -----------------------------------------------------------------------------
# The elif keyword is Python's way of saying "if the previous conditions were not true, then try this condition".

print("\n--- Elif ---")
a = 33
b = 33
if b > a:
    print("b is greater than a")
elif a == b:
    print("a and b are equal")

# -----------------------------------------------------------------------------
# 3. Else
# -----------------------------------------------------------------------------
# The else keyword catches anything which isn't caught by the preceding conditions.

print("\n--- Else ---")
a = 200
b = 33
if b > a:
    print("b is greater than a")
elif a == b:
    print("a and b are equal")
else:
    print("a is greater than b")

# -----------------------------------------------------------------------------
# 4. Short Hand If ... Else (Ternary Operator)
# -----------------------------------------------------------------------------
# If you have only one statement to execute, one for if, and one for else, you can put it all on the same line.

print("\n--- Ternary Operator ---")
a = 2
b = 330
print("A") if a > b else print("B")
