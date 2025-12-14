export { };

/**
 * MODULE 9: UTILITY TYPES
 * Topic: Partial, Required, Readonly
 * 
 * THEORY:
 * TypeScript provides global "Utility Types" to transform types.
 * 
 * 1. `Partial<T>`: Makes all properties optional.
 * 2. `Required<T>`: Makes all properties required.
 * 3. `Readonly<T>`: Makes all properties readonly.
 */

// --- CODE: Object Utilities ---

interface Todo {
    title: string;
    description: string;
}

// 1. Partial
// Useful for update functions where you might only update some fields.
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
}

const todo1: Todo = { title: "Learn TS", description: "Read docs" };
const todo2 = updateTodo(todo1, { description: "Write code" }); // OK (title missing)

// 2. Required
interface Props {
    a?: number;
    b?: string;
}

const obj: Props = { a: 5 };

// const obj2: Required<Props> = { a: 5 }; 
// Error: Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.

// 3. Readonly
const readonlyTodo: Readonly<Todo> = {
    title: "Delete me",
    description: "You can't"
};

// readonlyTodo.title = "New Title";
// Error: Cannot assign to 'title' because it is a read-only property.

// --- TASK ---
// TODO: Create an interface `User` with `id`, `name`, `email`.
// Create a function `createUser` that takes a `Partial<User>` but returns a full `User` (filling in defaults).
