export { };

/**
 * MODULE 11: ADVANCED TYPES
 * Topic: Template Literal Types
 * 
 * THEORY:
 * You can build string types using template literal syntax.
 * 
 * Syntax: `` `${TypeA}-${TypeB}` ``
 */

// --- CODE: Template Literals ---

type Color = "red" | "blue";
type Shade = "light" | "dark";

// "light-red" | "light-blue" | "dark-red" | "dark-blue"
type Palette = `${Shade}-${Color}`;

// String Manipulation Utilities (Built-in)
type Greeting = "Hello, World";
type Upper = Uppercase<Greeting>; // "HELLO, WORLD"
type Lower = Lowercase<Greeting>; // "hello, world"

// --- TASK ---
// TODO: Create a type `EventName` from a module name "User" and actions "Created" | "Deleted".
// The result should be "UserCreated" | "UserDeleted".
