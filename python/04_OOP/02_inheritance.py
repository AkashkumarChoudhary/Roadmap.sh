"""
02_inheritance.py

This module covers Inheritance.
"""

# -----------------------------------------------------------------------------
# 1. Parent and Child Classes
# -----------------------------------------------------------------------------
# Inheritance allows us to define a class that inherits all the methods and properties from another class.
# Parent class is the class being inherited from, also called base class.
# Child class is the class that inherits from another class, also called derived class.

class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

print("--- Parent Class ---")
x = Person("John", "Doe")
x.printname()

# -----------------------------------------------------------------------------
# 2. Create a Child Class
# -----------------------------------------------------------------------------
# To create a class that inherits the functionality from another class, send the parent class as a parameter when creating the child class.

class Student(Person):
  pass

print("\n--- Child Class ---")
x = Student("Mike", "Olsen")
x.printname()

# -----------------------------------------------------------------------------
# 3. Add __init__() and super()
# -----------------------------------------------------------------------------
# Python also has a super() function that will make the child class inherit all the methods and properties from its parent.

class Student(Person):
  def __init__(self, fname, lname, year):
    super().__init__(fname, lname)
    self.graduationyear = year

  def welcome(self):
    print("Welcome", self.firstname, self.lastname, "to the class of", self.graduationyear)

print("\n--- super() ---")
x = Student("Mike", "Olsen", 2019)
x.welcome()
