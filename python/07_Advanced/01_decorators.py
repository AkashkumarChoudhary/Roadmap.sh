"""
01_decorators.py

This module covers Decorators.
"""

# -----------------------------------------------------------------------------
# 1. Decorator Basics
# -----------------------------------------------------------------------------
# Decorators are a very powerful and useful tool in Python since it allows programmers to modify the behaviour of function or class.
# Decorators allow us to wrap another function in order to extend the behaviour of the wrapped function, without permanently modifying it.

def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_whee():
    print("Whee!")

print("--- Decorator ---")
say_whee()

# -----------------------------------------------------------------------------
# 2. Decorators with Arguments
# -----------------------------------------------------------------------------

def do_twice(func):
    def wrapper_do_twice(*args, **kwargs):
        func(*args, **kwargs)
        func(*args, **kwargs)
    return wrapper_do_twice

@do_twice
def greet(name):
    print(f"Hello {name}")

print("\n--- Decorator with Arguments ---")
greet("World")
