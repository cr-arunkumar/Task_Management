# Task Management API

A robust RESTful API for a task management system built with Node.js, Express, and TypeScript. This application provides a comprehensive solution for managing projects and tasks, featuring secure authentication, role-based access control, file uploads, and commenting functionalities. It serves as a practical example of modern backend development practices, including RESTful API design, middleware implementation, database integration with MongoDB, and environment-based configuration.

## ✨ Key Features

*   **Authentication:** Secure user authentication using JSON Web Tokens (JWT).
*   **Role-Based Access Control (RBAC):** Differentiated permissions for Project Managers (PM) and Members.
*   **Project Management:** Create, update, and manage projects.
*   **Task Management:** Create, assign, update, and delete tasks with a controlled status flow (To Do → In Progress → In Review → Done).
*   **File Uploads:** Attach files to tasks.
*   **Comments:** Add comments to tasks for better collaboration.
*   **Dashboard:** APIs to provide an overview of projects and tasks.
*   **API Documentation:** Interactive API documentation with Swagger (OpenAPI).

## 🛠️ Tech Stack

*   **Backend:** Node.js, Express.js
*   **Language:** TypeScript
*   **Database:** MongoDB with Mongoose
*   **Authentication:** JSON Web Tokens (JWT)
*   **File Handling:** Multer
*   **API Documentation:** Swagger (OpenAPI)
*   **Environment Variables:** dotenv

## 🚀 Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/en/) (v14 or later)
*   [npm](https://www.npmjs.com/)
*   [MongoDB](https://www.mongodb.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/cr-arunkumar/Task_Management.git
    cd Task_Management
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root directory and add the following variables:

    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/taskdb
    JWT_SECRET=your_jwt_secret
    JWT_EXPIRE=7d
    NODE_ENV=development
    UPLOAD_DIR=uploads
    MAX_FILE_SIZE=5242880
    ```

### Running the Application

Start the development server with:

```bash
npm run dev
```

The server will be running at `http://localhost:3000`.

## 📖 API Documentation

Explore and test the API endpoints using the Swagger documentation, available at:

[http://localhost:3000/api-docs](http://localhost:3000/api-docs)
