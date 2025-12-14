"""
05_file_handling.py

This module covers File Handling.
"""

# -----------------------------------------------------------------------------
# 1. Writing to a File
# -----------------------------------------------------------------------------
# "w" - Write - Opens a file for writing, creates the file if it does not exist.
# "a" - Append - Opens a file for appending, creates the file if it does not exist.

print("--- Writing to File ---")
f = open("demofile.txt", "w")
f.write("Now the file has more content!")
f.close()
print("Written to demofile.txt")

# -----------------------------------------------------------------------------
# 2. Reading from a File
# -----------------------------------------------------------------------------
# "r" - Read - Default value. Opens a file for reading, error if the file does not exist.

print("\n--- Reading from File ---")
f = open("demofile.txt", "r")
print(f.read())
f.close()

# -----------------------------------------------------------------------------
# 3. Deleting a File
# -----------------------------------------------------------------------------
# To delete a file, you must import the OS module, and run its os.remove() function.

import os
print("\n--- Deleting File ---")
if os.path.exists("demofile.txt"):
  os.remove("demofile.txt")
  print("demofile.txt deleted")
else:
  print("The file does not exist")
