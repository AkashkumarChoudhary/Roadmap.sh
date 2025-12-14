"""
01_lists.py

This module covers Python Lists.
"""

# -----------------------------------------------------------------------------
# 1. Creating a List
# -----------------------------------------------------------------------------
# Lists are used to store multiple items in a single variable.
# Lists are ordered, changeable, and allow duplicate values.

thislist = ["apple", "banana", "cherry"]
print("--- Creating List ---")
print(thislist)

# -----------------------------------------------------------------------------
# 2. Accessing Items
# -----------------------------------------------------------------------------
# List items are indexed, the first item has index [0], the second item has index [1] etc.

print("\n--- Accessing Items ---")
print(thislist[1])      # banana
print(thislist[-1])     # cherry (Negative Indexing)
print(thislist[1:3])    # ['banana', 'cherry'] (Range of Indexes)

# -----------------------------------------------------------------------------
# 3. Changing Items
# -----------------------------------------------------------------------------

thislist[1] = "blackcurrant"
print("\n--- Changing Items ---")
print(thislist)

# -----------------------------------------------------------------------------
# 4. Adding Items
# -----------------------------------------------------------------------------

thislist.append("orange") # Add to end
print("\n--- Appending ---")
print(thislist)

thislist.insert(1, "blueberry") # Insert at index
print("--- Inserting ---")
print(thislist)

# -----------------------------------------------------------------------------
# 5. Removing Items
# -----------------------------------------------------------------------------

thislist.remove("blackcurrant") # Remove specific item
print("\n--- Removing ---")
print(thislist)

thislist.pop() # Remove last item
print("--- Popping ---")
print(thislist)

del thislist[0] # Delete index 0
print("--- Deleting Index ---")
print(thislist)

# -----------------------------------------------------------------------------
# 6. Looping Through a List
# -----------------------------------------------------------------------------

print("\n--- Looping ---")
for x in thislist:
  print(x)
