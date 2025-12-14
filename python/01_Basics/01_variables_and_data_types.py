"""
01_variables_and_data_types.py

This module covers the fundamentals of Python variables and data types.
"""

# -----------------------------------------------------------------------------
# 1. Variables
# -----------------------------------------------------------------------------
# A variable is a container for storing data values.
# Unlike other languages (like C++ or Java), Python has no command for declaring a variable.
# A variable is created the moment you first assign a value to it.

x = 5           # x is of type int
y = "Hello"     # y is of type str

print("--- Variables ---")
print("x =", x)
print("y =", y)

# Variable Naming Rules:
# - Must start with a letter or underscore (_)
# - Cannot start with a number
# - Case-sensitive (age, Age, and AGE are different)

my_var = "John"
_my_var = "John"
myVar = "John"
MYVAR = "John"
myvar2 = "John"

# -----------------------------------------------------------------------------
# 2. Data Types
# -----------------------------------------------------------------------------
# Python has the following standard data types built-in by default:

# Text Type:      str
# Numeric Types:  int, float, complex
# Sequence Types: list, tuple, range
# Mapping Type:   dict
# Set Types:      set, frozenset
# Boolean Type:   bool
# Binary Types:   bytes, bytearray, memoryview

print("\n--- Data Types ---")

# Integer (int): Whole number, positive or negative, without decimals, of unlimited length.
x_int = 1
print(f"Value: {x_int}, Type: {type(x_int)}")

# Float: Number, positive or negative, containing one or more decimals.
x_float = 2.8
print(f"Value: {x_float}, Type: {type(x_float)}")

# Complex: Written with a "j" as the imaginary part.
x_complex = 1j
print(f"Value: {x_complex}, Type: {type(x_complex)}")

# Boolean (bool): Represents one of two values: True or False.
x_bool = True
print(f"Value: {x_bool}, Type: {type(x_bool)}")

# -----------------------------------------------------------------------------
# 3. Getting the Data Type
# -----------------------------------------------------------------------------
# You can get the data type of any object by using the type() function.

a = 10
b = "Python"
c = 10.5

print("\n--- Checking Types ---")
print(type(a))  # <class 'int'>
print(type(b))  # <class 'str'>
print(type(c))  # <class 'float'>
