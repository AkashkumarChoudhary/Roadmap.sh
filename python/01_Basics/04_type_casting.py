"""
04_type_casting.py

This module covers type casting (converting variables from one type to another).
"""

# -----------------------------------------------------------------------------
# 1. Implicit Conversion
# -----------------------------------------------------------------------------
# Python automatically converts one data type to another.

print("--- Implicit Conversion ---")
x_int = 10      # int
y_float = 10.5  # float

z_new = x_int + y_float

print(f"x_int type: {type(x_int)}")
print(f"y_float type: {type(y_float)}")
print(f"z_new value: {z_new}")
print(f"z_new type: {type(z_new)}") # Python automatically converts z to float

# -----------------------------------------------------------------------------
# 2. Explicit Conversion
# -----------------------------------------------------------------------------
# You can use built-in functions like int(), float(), and str() to perform explicit conversion.

print("\n--- Explicit Conversion ---")

# Convert to Integer
x = int(1)       # x will be 1
y = int(2.8)     # y will be 2
z = int("3")     # z will be 3

print(f"int(1) -> {x}")
print(f"int(2.8) -> {y}")
print(f"int('3') -> {z}")

# Convert to Float
x = float(1)     # x will be 1.0
y = float(2.8)   # y will be 2.8
z = float("3")   # z will be 3.0
w = float("4.2") # w will be 4.2

print(f"float(1) -> {x}")
print(f"float('3') -> {z}")

# Convert to String
x = str("s1")    # x will be 's1'
y = str(2)       # y will be '2'
z = str(3.0)     # z will be '3.0'

print(f"str(2) -> '{y}'")
print(f"str(3.0) -> '{z}'")
