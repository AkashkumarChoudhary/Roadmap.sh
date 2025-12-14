"""
02_linked_lists.py

This module covers Linked Lists implementation from scratch.
"""

# -----------------------------------------------------------------------------
# 1. Node Class
# -----------------------------------------------------------------------------
# A linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list.

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

# -----------------------------------------------------------------------------
# 2. LinkedList Class
# -----------------------------------------------------------------------------

class LinkedList:
    def __init__(self):
        self.head = None

    # Insert at the beginning
    def push(self, new_data):
        new_node = Node(new_data)
        new_node.next = self.head
        self.head = new_node

    # Insert after a specific node
    def insert_after(self, prev_node, new_data):
        if prev_node is None:
            print("The given previous node must inLinkedList.")
            return
        new_node = Node(new_data)
        new_node.next = prev_node.next
        prev_node.next = new_node

    # Append to the end
    def append(self, new_data):
        new_node = Node(new_data)
        if self.head is None:
            self.head = new_node
            return
        last = self.head
        while (last.next):
            last = last.next
        last.next = new_node

    # Print the list
    def print_list(self):
        temp = self.head
        while (temp):
            print(temp.data, end=" -> ")
            temp = temp.next
        print("None")

# -----------------------------------------------------------------------------
# 3. Testing
# -----------------------------------------------------------------------------

print("--- Linked List Implementation ---")
llist = LinkedList()

llist.append(6)
llist.push(7)
llist.push(1)
llist.append(4)
llist.insert_after(llist.head.next, 8)

print("Created Linked List: ")
llist.print_list()
