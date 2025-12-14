"""
01_recursion.py

This module covers Recursion.
"""

# -----------------------------------------------------------------------------
# 1. Recursion Basics
# -----------------------------------------------------------------------------
# Recursion is a common mathematical and programming concept. It means that a function calls itself.
# This has the benefit of meaning that you can loop through data to reach a result.

def tri_recursion(k):
  if(k > 0):
    result = k + tri_recursion(k - 1)
    print(result)
  else:
    result = 0
  return result

print("--- Recursion Example ---")
tri_recursion(6)

# -----------------------------------------------------------------------------
# 2. Factorial
# -----------------------------------------------------------------------------
# Factorial of n is the product of all positive integers less than or equal to n.

def factorial(n):
    if n == 1:
        return 1
    else:
        return n * factorial(n-1)

print("\n--- Factorial ---")
num = 5
print(f"Factorial of {num} is {factorial(num)}")

# -----------------------------------------------------------------------------
# 3. Fibonacci Sequence
# -----------------------------------------------------------------------------
# Fibonacci sequence is a series of numbers where a number is the addition of the last two numbers.

def fibonacci(n):
    if n <= 1:
        return n
    else:
        return(fibonacci(n-1) + fibonacci(n-2))

print("\n--- Fibonacci ---")
nterms = 10
print("Fibonacci sequence:")
for i in range(nterms):
    print(fibonacci(i), end=" ")
print()
