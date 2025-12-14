export { };

/**
 * MODULE 10: TYPE NARROWING
 * Topic: Discriminated Unions (Tagged Unions)
 * 
 * THEORY:
 * This is the MOST POWERFUL pattern in TypeScript.
 * 
 * If you have a Union of Interfaces, and they all share a common literal property (the "tag" or "discriminant"),
 * TS can narrow the type based on that tag.
 */

// --- CODE: Discriminated Unions ---

interface Circle {
    kind: "circle"; // The Tag
    radius: number;
}

interface Square {
    kind: "square"; // The Tag
    sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            // TS knows shape is Circle here
            return Math.PI * shape.radius ** 2;
        case "square":
            // TS knows shape is Square here
            return shape.sideLength ** 2;
    }
}

// --- TASK ---
// TODO: Add a `Rectangle` interface (kind: "rectangle", width, height) to the Shape union.
// Update `getArea` to handle it.
