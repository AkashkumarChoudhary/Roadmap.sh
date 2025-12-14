"""
03_context_managers.py

This module covers Context Managers (the 'with' statement).
"""

# -----------------------------------------------------------------------------
# 1. The 'with' Statement
# -----------------------------------------------------------------------------
# Context managers allow you to allocate and release resources precisely when you want to.
# The most widely used example of context managers is the with statement.

# Writing to a file using with
print("--- Using 'with' for File I/O ---")
with open('test_file.txt', 'w') as f:
    f.write('Hello World!')
print("File written successfully.")

# Reading
with open('test_file.txt', 'r') as f:
    content = f.read()
    print(f"File content: {content}")

# -----------------------------------------------------------------------------
# 2. Custom Context Manager
# -----------------------------------------------------------------------------
# You can create your own context managers by defining __enter__() and __exit__() methods.

class FileManager:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode
        self.file = None

    def __enter__(self):
        self.file = open(self.filename, self.mode)
        return self.file

    def __exit__(self, exc_type, exc_value, exc_traceback):
        self.file.close()

print("\n--- Custom Context Manager ---")
with FileManager('test_file.txt', 'w') as f:
    f.write('Testing custom context manager')

print(f"Is file closed? {f.closed}")

import os
os.remove('test_file.txt') # Cleanup
