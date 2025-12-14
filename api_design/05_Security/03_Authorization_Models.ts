export { };
/**
 * 03_Authorization_Models.ts
 *
 * How do we decide PERMISSIONS?
 */

interface User {
    id: string;
    roles: string[];
    department: string;
}

interface Resource {
    id: string;
    ownerId: string;
    department: string;
}

// -----------------------------------------------------------------------------
// 1. RBAC (Role-Based Access Control)
// -----------------------------------------------------------------------------
// Permissions are assigned to ROLES. Users are assigned ROLES.
// Simple, common.

const rolePermissions: Record<string, string[]> = {
    admin: ["read", "write", "delete"],
    editor: ["read", "write"],
    viewer: ["read"],
};

function checkRBAC(user: User, action: string): boolean {
    for (const role of user.roles) {
        const permissions = rolePermissions[role] || [];
        if (permissions.includes(action)) return true;
    }
    return false;
}


// -----------------------------------------------------------------------------
// 2. ABAC (Attribute-Based Access Control)
// -----------------------------------------------------------------------------
// Permissions based on attributes of User, Resource, and Environment.
// Fine-grained, dynamic.

function checkABAC(user: User, resource: Resource, action: string): boolean {
    // Policy: Users can only edit resources in their own department
    if (action === "write" && user.department === resource.department) {
        return true;
    }
    // Policy: Admins can do anything
    if (user.roles.includes("admin")) {
        return true;
    }
    return false;
}


// --- Usage ---

const alice: User = { id: "1", roles: ["editor"], department: "Sales" };
const doc: Resource = { id: "101", ownerId: "2", department: "Sales" };

console.log("--- Authorization Models ---");

console.log(`RBAC: Can Alice delete? ${checkRBAC(alice, "delete")}`); // False (Editor can't delete)
console.log(`RBAC: Can Alice write? ${checkRBAC(alice, "write")}`);   // True

console.log(`ABAC: Can Alice write to Sales doc? ${checkABAC(alice, doc, "write")}`); // True (Same dept)
