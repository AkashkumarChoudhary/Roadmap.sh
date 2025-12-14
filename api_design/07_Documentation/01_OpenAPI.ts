export { };
/**
 * 01_OpenAPI.ts
 *
 * OpenAPI (formerly Swagger) is the standard for documenting REST APIs.
 * It describes endpoints, request/response formats, and auth.
 */

// This is what an OpenAPI spec looks like structurally.
// Usually written in YAML or JSON.

interface OpenApiSpec {
    openapi: string; // Version (e.g., "3.0.0")
    info: {
        title: string;
        version: string;
        description?: string;
    };
    paths: Record<string, PathItem>;
    components?: {
        schemas?: Record<string, any>;
        securitySchemes?: Record<string, any>;
    };
}

interface PathItem {
    get?: Operation;
    post?: Operation;
    // ... put, delete, etc.
}

interface Operation {
    summary: string;
    responses: Record<string, Response>;
}

interface Response {
    description: string;
    content?: Record<string, any>;
}

// --- Example Spec ---

const myApiSpec: OpenApiSpec = {
    openapi: "3.0.0",
    info: {
        title: "User API",
        version: "1.0.0",
        description: "API for managing users",
    },
    paths: {
        "/users": {
            get: {
                summary: "Get all users",
                responses: {
                    "200": {
                        description: "A list of users",
                        content: {
                            "application/json": {
                                schema: { type: "array", items: { $ref: "#/components/schemas/User" } },
                            },
                        },
                    },
                },
            },
        },
    },
    components: {
        schemas: {
            User: {
                type: "object",
                properties: {
                    id: { type: "integer" },
                    name: { type: "string" },
                },
            },
        },
    },
};

console.log("--- OpenAPI Spec (JSON) ---");
console.log(JSON.stringify(myApiSpec, null, 2));
