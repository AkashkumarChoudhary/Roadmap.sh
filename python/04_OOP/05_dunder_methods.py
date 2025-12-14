"""
05_dunder_methods.py

This module covers Dunder (Double Underscore) Methods, also known as Magic Methods.
"""

# -----------------------------------------------------------------------------
# 1. The __str__() Function
# -----------------------------------------------------------------------------
# The __str__() function controls what should be returned when the class object is represented as a string.

class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def __str__(self):
    return f"{self.name}({self.age})"

print("--- __str__ Method ---")
p1 = Person("John", 36)
print(p1)

# -----------------------------------------------------------------------------
# 2. Operator Overloading
# -----------------------------------------------------------------------------
# Dunder methods allow you to define the behavior of operators for your custom classes.

class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __str__(self):
        return f"Vector({self.x}, {self.y})"

print("\n--- Operator Overloading (__add__) ---")
v1 = Vector(2, 4)
v2 = Vector(1, 6)
v3 = v1 + v2
print(f"{v1} + {v2} = {v3}")
