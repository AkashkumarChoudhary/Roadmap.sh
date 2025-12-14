"""
02_functions.py

This module covers defining and calling functions.
"""

# -----------------------------------------------------------------------------
# 1. Creating and Calling a Function
# -----------------------------------------------------------------------------
# A function is a block of code which only runs when it is called.
# In Python a function is defined using the def keyword.

def my_function():
    print("Hello from a function")

print("--- Calling Function ---")
my_function()

# -----------------------------------------------------------------------------
# 2. Arguments
# -----------------------------------------------------------------------------
# Information can be passed into functions as arguments.

def greet(name):
    print(f"Hello, {name}!")

print("\n--- Arguments ---")
greet("Alice")
greet("Bob")

# -----------------------------------------------------------------------------
# 3. Arbitrary Arguments, *args
# -----------------------------------------------------------------------------
# If you do not know how many arguments that will be passed into your function, add a * before the parameter name.

def my_kids(*kids):
    print("The youngest child is " + kids[2])

print("\n--- Arbitrary Arguments (*args) ---")
my_kids("Emil", "Tobias", "Linus")

# -----------------------------------------------------------------------------
# 4. Keyword Arguments
# -----------------------------------------------------------------------------
# You can also send arguments with the key = value syntax.

def my_child(child3, child2, child1):
    print("The youngest child is " + child3)

print("\n--- Keyword Arguments ---")
my_child(child1 = "Emil", child2 = "Tobias", child3 = "Linus")

# -----------------------------------------------------------------------------
# 5. Return Values
# -----------------------------------------------------------------------------
# To let a function return a value, use the return statement.

def multiply_by_five(x):
    return 5 * x

print("\n--- Return Values ---")
print(multiply_by_five(3))
print(multiply_by_five(5))

# -----------------------------------------------------------------------------
# 6. Scope (Global vs Local)
# -----------------------------------------------------------------------------
# A variable created inside a function belongs to the local scope of that function.
# A variable created in the main body of the Python code is a global variable.

x = "global"

def myfunc():
    x = "local"
    print("Inside function:", x)

print("\n--- Scope ---")
myfunc()
print("Outside function:", x)

# Global Keyword
def use_global():
    global x
    x = "modified global"

use_global()
print("After global keyword:", x)
