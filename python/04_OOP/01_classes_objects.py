"""
01_classes_objects.py

This module covers Classes and Objects.
"""

# -----------------------------------------------------------------------------
# 1. Create a Class
# -----------------------------------------------------------------------------
# Python is an object oriented programming language.
# Almost everything in Python is an object, with its properties and methods.
# A Class is like an object constructor, or a "blueprint" for creating objects.

class MyClass:
  x = 5

print("--- Create Class ---")
p1 = MyClass()
print(p1.x)

# -----------------------------------------------------------------------------
# 2. The __init__() Function
# -----------------------------------------------------------------------------
# All classes have a function called __init__(), which is always executed when the class is being initiated.
# Use the __init__() function to assign values to object properties.

class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

print("\n--- __init__ Function ---")
p1 = Person("John", 36)
print(p1.name)
print(p1.age)

# -----------------------------------------------------------------------------
# 3. Object Methods
# -----------------------------------------------------------------------------
# Objects can also contain methods. Methods in objects are functions that belong to the object.

class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def myfunc(self):
    print("Hello my name is " + self.name)

print("\n--- Object Methods ---")
p1 = Person("John", 36)
p1.myfunc()

# -----------------------------------------------------------------------------
# 4. The self Parameter
# -----------------------------------------------------------------------------
# The self parameter is a reference to the current instance of the class, and is used to access variables that belongs to the class.
# It does not have to be named self , you can call it whatever you like, but it has to be the first parameter of any function in the class.
