# API Design Tutorial

This tutorial covers the fundamentals of API Design using TypeScript code examples.
Instead of just reading theory, you can run the code to see how concepts work in practice.

## Prerequisites

- Node.js installed
- NPM installed

## Setup

1.  Install dependencies:
    ```bash
    npm install
    ```

## How to Run

You can run any file using `npx ts-node <filename>`.

**Example:**
```bash
npx ts-node 01_Basics/01_Introduction.ts
```

## Curriculum

### 01. Basics
- `01_Introduction.ts`: What is an API? Request/Response cycle.
- `02_HTTP_Protocol.ts`: HTTP Methods, Status Codes, Headers.

### 02. Architectures
- `01_Common_Architectures.ts`: REST vs GraphQL vs RPC.
- `02_Comparison.ts`: When to use which architecture.

### 03. RESTful Design
- `01_Resources_and_URI_Design.ts`: Naming conventions and URI patterns.
- `02_Methods_and_CRUD.ts`: Implementing CRUD operations.
- `03_Versioning_Strategies.ts`: URI, Header, and Query versioning.
- `04_Data_Formats.ts`: JSON vs XML.

### 04. Advanced REST
- `01_HATEOAS.ts`: Hypermedia controls.
- `02_Advanced_Topics.ts`: Pagination, Rate Limiting, Idempotency, RFC 7807.
- `03_Content_Negotiation.ts`: Handling `Accept` headers.

### 05. Security
- `01_Auth_Concepts.ts`: Authentication vs Authorization.
- `02_Authentication_Mechanisms.ts`: Basic Auth, Bearer Token, Session Auth.
- `03_Authorization_Models.ts`: RBAC vs ABAC.

### 06. Performance & Reliability
- `01_Performance_Optimization.ts`: Caching and Rate Limiting.
- `02_Reliability.ts`: Retry Logic and Circuit Breakers.
- `03_Testing.ts`: Unit and Integration Testing examples.

### 07. Documentation
- `01_OpenAPI.ts`: Structure of an OpenAPI specification.
- `02_Best_Practices.ts`: Documentation checklist.
