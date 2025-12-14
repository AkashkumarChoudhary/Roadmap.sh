# Introduction to API Design

## What is an API?
**API** stands for **Application Programming Interface**. It is a set of rules and protocols that allows different software applications to communicate with each other.

Think of an API as a **waiter** in a restaurant:
1.  **You (The Client)** look at the menu and give your order to the waiter.
2.  **The Waiter (The API)** takes your order to the kitchen.
3.  **The Kitchen (The Server)** prepares the food.
4.  **The Waiter (The API)** brings the food back to you.

You don't need to know how the kitchen works; you just need to know how to order. Similarly, a client doesn't need to know the server's internal logic, just how to send a request.

## The Request / Response Cycle
Most web APIs work on a **Request/Response** model, typically over HTTP.

1.  **Client sends a Request**:
    *   **URL**: Where to go (e.g., `https://api.example.com/users`).
    *   **Method**: What to do (e.g., `GET` to fetch data).
    *   **Headers**: Meta-information (e.g., `Authorization`, `Content-Type`).
    *   **Body**: Data to send (optional, e.g., JSON data for creating a user).

2.  **Server processes the Request**:
    *   Validates the request.
    *   Performs the action (queries database, runs logic).

3.  **Server sends a Response**:
    *   **Status Code**: Did it work? (e.g., `200 OK`, `404 Not Found`).
    *   **Headers**: Meta-information (e.g., `Content-Type`).
    *   **Body**: The result (e.g., JSON data of the requested users).

### Example
**Request:**
```http
GET /users/123 HTTP/1.1
Host: api.example.com
Accept: application/json
```

**Response:**
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 123,
  "name": "John Doe",
  "email": "john@example.com"
}
```
