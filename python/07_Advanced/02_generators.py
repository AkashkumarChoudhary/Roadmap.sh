"""
02_generators.py

This module covers Generators.
"""

# -----------------------------------------------------------------------------
# 1. Generator Functions
# -----------------------------------------------------------------------------
# A generator-function is defined like a normal function, but whenever it needs to generate a value, it does so with the yield keyword rather than return.
# If the body of a def contains yield, the function automatically becomes a generator function.

def simple_generator():
    yield 1
    yield 2
    yield 3

print("--- Generator ---")
for value in simple_generator():
    print(value)

# -----------------------------------------------------------------------------
# 2. Generator Object
# -----------------------------------------------------------------------------
# Generator functions return a generator object. Generator objects are used either by calling the next method on the generator object or using the generator object in a “for in” loop.

def my_gen():
    n = 1
    print('This is printed first')
    yield n

    n += 1
    print('This is printed second')
    yield n

    n += 1
    print('This is printed at last')
    yield n

print("\n--- Generator Object ---")
a = my_gen()
print(next(a))
print(next(a))
print(next(a))
