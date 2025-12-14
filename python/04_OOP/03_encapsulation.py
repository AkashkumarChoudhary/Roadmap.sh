"""
03_encapsulation.py

This module covers Encapsulation (Private Members).
"""

# -----------------------------------------------------------------------------
# 1. Encapsulation
# -----------------------------------------------------------------------------
# Encapsulation describes the idea of wrapping data and the methods that work on data within one unit.
# This puts restrictions on accessing variables and methods directly and can prevent the accidental modification of data.

# Private Members
# In Python, we denote private attributes using underscore as the prefix i.e single _ or double __.

class Base:
    def __init__(self):
        self.a = "I am Public"
        self.__c = "I am Private" # Private Variable

print("--- Encapsulation ---")
obj = Base()
print(obj.a)

# print(obj.__c) # This will raise an AttributeError

# Accessing private member (Name Mangling)
# Python mangles the name of private members to _ClassName__MemberName
print(f"Accessing private member via name mangling: {obj._Base__c}")
