"""
03_lambda.py

This module covers Lambda functions (anonymous functions).
"""

# -----------------------------------------------------------------------------
# 1. Lambda Syntax
# -----------------------------------------------------------------------------
# A lambda function is a small anonymous function.
# A lambda function can take any number of arguments, but can only have one expression.
# Syntax: lambda arguments : expression

x = lambda a : a + 10
print("--- Lambda Basics ---")
print(x(5))

# Multiple arguments
x = lambda a, b : a * b
print(x(5, 6))

# -----------------------------------------------------------------------------
# 2. Why Use Lambda Functions?
# -----------------------------------------------------------------------------
# The power of lambda is better shown when you use them as an anonymous function inside another function.

def myfunc(n):
  return lambda a : a * n

mydoubler = myfunc(2)
mytripler = myfunc(3)

print("\n--- Lambda inside Function ---")
print(f"Doubler of 11: {mydoubler(11)}")
print(f"Tripler of 11: {mytripler(11)}")
