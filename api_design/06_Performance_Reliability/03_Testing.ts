export { };
/**
 * 03_Testing.ts
 *
 * How to verify your API works.
 * 1. Unit Testing: Test individual functions.
 * 2. Integration Testing: Test the API endpoints (Controller + Service).
 */

// Mock Testing Framework (like Jest)
function describe(name: string, fn: () => void) {
    console.log(`\nSuite: ${name}`);
    fn();
}

function it(name: string, fn: () => void) {
    try {
        fn();
        console.log(`  ✅ ${name}`);
    } catch (e: any) {
        console.log(`  ❌ ${name}: ${e.message}`);
    }
}

function expect(actual: any) {
    return {
        toBe: (expected: any) => {
            if (actual !== expected) throw new Error(`Expected ${expected}, got ${actual}`);
        },
        toEqual: (expected: any) => {
            if (JSON.stringify(actual) !== JSON.stringify(expected))
                throw new Error(`Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
        },
    };
}

// Code to Test
function add(a: number, b: number) {
    return a + b;
}

const mockDb = { users: [{ id: 1, name: "Alice" }] };
function getUser(id: number) {
    return mockDb.users.find((u) => u.id === id);
}

// --- Tests ---

console.log("--- API Testing ---");

describe("Math Utils (Unit Test)", () => {
    it("should add two numbers", () => {
        expect(add(1, 2)).toBe(3);
    });
});

describe("User API (Integration Test)", () => {
    it("should return a user by ID", () => {
        const user = getUser(1);
        expect(user).toEqual({ id: 1, name: "Alice" });
    });

    it("should return undefined for missing user", () => {
        const user = getUser(999);
        expect(user).toBe(undefined);
    });
});
