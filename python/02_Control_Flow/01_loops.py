"""
01_loops.py

This module covers Python loops (While and For).
"""

# -----------------------------------------------------------------------------
# 1. The while Loop
# -----------------------------------------------------------------------------
# With the while loop we can execute a set of statements as long as a condition is true.

print("--- While Loop ---")
i = 1
while i < 6:
    print(i)
    i += 1

# -----------------------------------------------------------------------------
# 2. The break Statement
# -----------------------------------------------------------------------------
# With the break statement we can stop the loop even if the while condition is true.

print("\n--- Break Statement ---")
i = 1
while i < 6:
    print(i)
    if i == 3:
        break
    i += 1

# -----------------------------------------------------------------------------
# 3. The continue Statement
# -----------------------------------------------------------------------------
# With the continue statement we can stop the current iteration, and continue with the next.

print("\n--- Continue Statement ---")
i = 0
while i < 6:
    i += 1
    if i == 3:
        continue
    print(i)

# -----------------------------------------------------------------------------
# 4. The for Loop
# -----------------------------------------------------------------------------
# A for loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).

print("\n--- For Loop ---")
fruits = ["apple", "banana", "cherry"]
for x in fruits:
    print(x)

# Looping Through a String
print("\n--- Looping Through a String ---")
for x in "banana":
    print(x)

# -----------------------------------------------------------------------------
# 5. The range() Function
# -----------------------------------------------------------------------------
# To loop through a set of code a specified number of times, we can use the range() function.
# The range() function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and ends at a specified number.

print("\n--- Range Function ---")
for x in range(6):
    print(x) # Prints 0 to 5

print("\n--- Range with Start/End ---")
for x in range(2, 6):
    print(x) # Prints 2, 3, 4, 5

print("\n--- Range with Step ---")
for x in range(2, 30, 3):
    print(x) # Prints 2, 5, 8, 11...

# -----------------------------------------------------------------------------
# 6. Nested Loops
# -----------------------------------------------------------------------------
# A nested loop is a loop inside a loop.

print("\n--- Nested Loops ---")
adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]

for x in adj:
    for y in fruits:
        print(x, y)
