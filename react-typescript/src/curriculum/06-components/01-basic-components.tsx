import React from 'react';

/**
 * MODULE 06: COMPONENTS
 *
 * 1. Functional Components: The standard way to build UI
 * 2. Typing Props: Defining the shape of data a component receives
 * 3. React.FC vs Standard Function: Pros and Cons
 * 4. Children: Using React.ReactNode
 */

// ==========================================
// 1. TYPING PROPS
// ==========================================
// Define an interface for your props
interface UserCardProps {
    name: string;
    role: 'Admin' | 'User' | 'Guest'; // Union type for specific values
    isActive?: boolean; // Optional prop
}

// ==========================================
// 2. FUNCTIONAL COMPONENTS
// ==========================================

// --- Option A: Standard Function (Recommended) ---
// ✅ BEST PRACTICE: Easier to read, no implicit 'children' (in older React versions).
export function UserCard({ name, role, isActive = false }: UserCardProps) {
    return (
        <div style={{
            border: '1px solid #ccc',
            padding: '1rem',
            borderRadius: '8px',
            backgroundColor: isActive ? '#e6fffa' : '#fff'
        }}>
            <h3>{name}</h3>
            <p>Role: <strong>{role}</strong></p>
            <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
        </div>
    );
}

// --- Option B: React.FC (Function Component) ---
// ❌ LESS COMMON NOW: Historically used because it implicitly included 'children',
// but that was removed in React 18 types. Now it's mostly a matter of preference,
// but standard functions are often preferred for simplicity.
export const UserCardFC: React.FC<UserCardProps> = ({ name, role, isActive }) => {
    return (
        <div style={{
            border: '1px dashed #666',
            padding: '1rem',
            marginTop: '10px',
            opacity: isActive ? 1 : 0.5
        }}>
            <h3>[FC] {name}</h3>
            <p>{role}</p>
        </div>
    );
};

// ==========================================
// 3. CHILDREN PROP
// ==========================================
interface ContainerProps {
    title: string;
    children: React.ReactNode; // ✅ The correct type for anything React can render
}

export function Container({ title, children }: ContainerProps) {
    return (
        <section style={{ border: '2px solid #333', padding: '20px', margin: '20px 0' }}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

// ==========================================
// TODO: YOUR TURN
// ==========================================
// 1. Create a component named 'Button' that accepts:
//    - label (string)
//    - onClick (function that returns void)
//    - disabled (optional boolean)
// 2. Render the Button inside the 'Module06' component below.

// Write your Button component here:


export const Module06 = () => {
    return (
        <div>
            <h1>Module 06: Components</h1>

            <Container title="User List">
                <UserCard name="Alice" role="Admin" isActive={true} />
                <UserCard name="Bob" role="User" />
            </Container>

            {/* Render your Button here */}
        </div>
    );
};
