"""
04_error_handling.py

This module covers Error Handling (Try...Except).
"""

# -----------------------------------------------------------------------------
# 1. Try...Except
# -----------------------------------------------------------------------------
# The try block lets you test a block of code for errors.
# The except block lets you handle the error.

print("--- Try...Except ---")
try:
  print(x) # x is not defined
except:
  print("An exception occurred")

# -----------------------------------------------------------------------------
# 2. Many Exceptions
# -----------------------------------------------------------------------------
# You can define as many exception blocks as you want.

print("\n--- Many Exceptions ---")
try:
  print(x)
except NameError:
  print("Variable x is not defined")
except:
  print("Something else went wrong")

# -----------------------------------------------------------------------------
# 3. Else and Finally
# -----------------------------------------------------------------------------
# The else keyword defines a block of code to be executed if no errors were raised.
# The finally block, if specified, will be executed regardless if the try block raises an error or not.

print("\n--- Else and Finally ---")
try:
  print("Hello")
except:
  print("Something went wrong")
else:
  print("Nothing went wrong")
finally:
  print("The 'try except' is finished")

# -----------------------------------------------------------------------------
# 4. Raise an exception
# -----------------------------------------------------------------------------
# To throw (or raise) an exception, use the raise keyword.

print("\n--- Raising Exceptions ---")
x = -1
try:
    if x < 0:
        raise Exception("Sorry, no numbers below zero")
except Exception as e:
    print(f"Caught exception: {e}")
