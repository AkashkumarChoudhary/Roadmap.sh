"""
02_dictionaries.py

This module covers Python Dictionaries.
"""

# -----------------------------------------------------------------------------
# 1. Creating a Dictionary
# -----------------------------------------------------------------------------
# Dictionaries are used to store data values in key:value pairs.
# A dictionary is a collection which is ordered (3.7+), changeable and do not allow duplicates.

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print("--- Creating Dictionary ---")
print(thisdict)

# -----------------------------------------------------------------------------
# 2. Accessing Items
# -----------------------------------------------------------------------------

print("\n--- Accessing Items ---")
x = thisdict["model"]
print(x)
y = thisdict.get("year")
print(y)

# -----------------------------------------------------------------------------
# 3. Changing Values
# -----------------------------------------------------------------------------

thisdict["year"] = 2018
print("\n--- Changing Values ---")
print(thisdict)

# -----------------------------------------------------------------------------
# 4. Adding Items
# -----------------------------------------------------------------------------

thisdict["color"] = "red"
print("\n--- Adding Items ---")
print(thisdict)

# -----------------------------------------------------------------------------
# 5. Removing Items
# -----------------------------------------------------------------------------

thisdict.pop("model")
print("\n--- Removing Items ---")
print(thisdict)

# -----------------------------------------------------------------------------
# 6. Looping Through a Dictionary
# -----------------------------------------------------------------------------

print("\n--- Looping ---")
# Print keys
for x in thisdict:
  print(x)

# Print values
for x in thisdict:
  print(thisdict[x])

# Print both
for x, y in thisdict.items():
  print(x, y)
