"""
02_working_with_strings.py

This module covers string manipulation in Python.
"""

# -----------------------------------------------------------------------------
# 1. Creating Strings
# -----------------------------------------------------------------------------
# Strings in python are surrounded by either single quotation marks, or double quotation marks.

str1 = 'Hello'
str2 = "World"

print("--- Creating Strings ---")
print(str1)
print(str2)

# Multiline Strings
# You can assign a multiline string to a variable by using three quotes.
a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""
print("\nMultiline String:")
print(a)

# -----------------------------------------------------------------------------
# 2. Strings are Arrays
# -----------------------------------------------------------------------------
# Like many other popular programming languages, strings in Python are arrays of bytes representing unicode characters.
# Square brackets can be used to access elements of the string.

a = "Hello, World!"
print("\n--- Accessing Characters ---")
print(f"First character of '{a}': {a[0]}")  # H
print(f"Character at index 1: {a[1]}")      # e

# -----------------------------------------------------------------------------
# 3. Slicing Strings
# -----------------------------------------------------------------------------
# You can return a range of characters by using the slice syntax.
# Specify the start index and the end index, separated by a colon, to return a part of the string.

b = "Hello, World!"
print("\n--- Slicing ---")
print(f"Original: {b}")
print(f"b[2:5]: {b[2:5]}")    # llo (from index 2 to 5 (not included))
print(f"b[:5]: {b[:5]}")      # Hello (from start to index 5 (not included))
print(f"b[2:]: {b[2:]}")      # llo, World! (from index 2 to the end)
print(f"b[-5:-2]: {b[-5:-2]}") # orl (Negative indexing)

# -----------------------------------------------------------------------------
# 4. String Methods
# -----------------------------------------------------------------------------
# Python has a set of built-in methods that you can use on strings.

a = " Hello, World! "
print("\n--- String Methods ---")
print(f"strip(): '{a.strip()}'")        # Removes whitespace from beginning and end
print(f"lower(): '{a.lower()}'")        # Returns the string in lower case
print(f"upper(): '{a.upper()}'")        # Returns the string in upper case
print(f"replace('H', 'J'): '{a.replace('H', 'J')}'") # Replaces a string with another string
print(f"split(','): {a.split(',')}")    # Splits the string into a list

# -----------------------------------------------------------------------------
# 5. String Concatenation
# -----------------------------------------------------------------------------
# To combine, or concatenate, two strings you can use the + operator.

a = "Hello"
b = "World"
c = a + " " + b
print("\n--- Concatenation ---")
print(c)

# -----------------------------------------------------------------------------
# 6. String Formatting (f-strings)
# -----------------------------------------------------------------------------
# F-String was introduced in Python 3.6, and is now the preferred way of formatting strings.
# To specify a string as an f-string, simply put an f in front of the string literal,
# and add curly braces {} as placeholders for variables and other operations.

age = 36
txt = f"My name is John, I am {age}"
print("\n--- f-strings ---")
print(txt)

price = 59
txt = f"The price is {price:.2f} dollars" # Format as fixed point number with 2 decimals
print(txt)
