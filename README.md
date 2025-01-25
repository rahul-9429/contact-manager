# Contact Manager API

## Overview
The Contact Manager API is a backend service for managing user contacts with secure authentication. It provides functionality for creating, reading, updating, and deleting contacts while ensuring user data privacy with JWT-based authentication.

---

## Features
- **Authentication**: User registration and login with hashed passwords using bcrypt.
- **JWT Integration**: Secured access to private routes with JSON Web Tokens.
- **CRUD Operations**:
  - Create, Read, Update, and Delete contacts.
  - Fetch all contacts of a specific user.
  - Retrieve, update, or delete specific contacts by ID.
- **Error Handling**: Comprehensive error messages for invalid inputs or unauthorized access.

---

## Technologies Used
- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: Database for storing user and contact information.
- **bcrypt**: Password hashing for user security.
- **jsonwebtoken**: For generating and verifying JWTs.

---

## Endpoints

### User Routes

#### Register User
- **Method**: POST
- **URL**: `/api/user/register`
- **Access**: Public
- **Description**: Registers a new user.
- **Request Body**:
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  ```json
  {
    "message": "User created successfully",
    "username": "string",
    "email": "string"
  }
  ```

#### Login User
- **Method**: POST
- **URL**: `/api/user/login`
- **Access**: Public
- **Description**: Logs in a user and provides a JWT token.
- **Request Body**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  ```json
  {
    "accessToekn": "string"
  }
  ```

#### Get Current User
- **Method**: GET
- **URL**: `/api/user/currentUser`
- **Access**: Private
- **Description**: Retrieves the current logged-in user's details.

---

### Contact Routes

#### Get All Contacts
- **Method**: GET
- **URL**: `/api/contacts`
- **Access**: Private
- **Description**: Retrieves all contacts for the logged-in user.

#### Get Specific Contact
- **Method**: GET
- **URL**: `/api/contacts/:id`
- **Access**: Private
- **Description**: Retrieves a specific contact by its ID.

#### Save Contact
- **Method**: POST
- **URL**: `/api/contacts`
- **Access**: Private
- **Description**: Saves a new contact.
- **Request Body**:
  ```json
  {
    "name": "string",
    "email": "string",
    "phone": "string"
  }
  ```

#### Update Contact
- **Method**: PUT
- **URL**: `/api/contacts/:id`
- **Access**: Private
- **Description**: Updates an existing contact by ID.
- **Request Body**:
  ```json
  {
    "name": "string",
    "email": "string",
    "phone": "string"
  }
  ```

#### Delete Contact
- **Method**: DELETE
- **URL**: `/api/contacts/:id`
- **Access**: Private
- **Description**: Deletes a specific contact by ID.

---

## Error Responses
- **400 Bad Request**: For missing or invalid input fields.
- **401 Unauthorized**: For requests without valid JWT tokens.
- **404 Not Found**: When a resource (contact) is not found.

---

## Environment Variables
Create a `.env` file in the project root and include:
```env
ACCESS_TOKEN_SECRET=your_secret_key
MONGO_URI=your_mongodb_connection_string
```

---

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables as described above.
4. Start the server:
   ```bash
   npm start
   ```

---

## License
This project is licensed under the MIT License.

