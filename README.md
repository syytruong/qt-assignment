# Certificate Management System

## Project Structure

- `backend/`: Contains all backend code.
  - `controllers/`: Business logic for handling API requests.
  - `models/`: Database models.
  - `routes/`: API route definitions.
  - `config/`: Configuration files, including Swagger setup.
  - `app.js`: Entry point for the backend server.
- `frontend/`: Contains all frontend code.
  - `src/`: Source files for the React application.
    - `components/`: React components.
    - `App.js`: Main application component.
    - `index.js`: Entry point for the React application.
- `README.md`: Documentation for the project.

This project uses SQLite as its database. Follow these steps to set up and initialize the database:

1. **Database File**: The application is configured to use an SQLite database. The database file is automatically created when you first run the application. By default, the database file is named `certificates.db` and located in the `backend` directory.

2. **Database Schema**: To set up the database schema, you need to run the database initialization script. This script creates the necessary tables for the application.

    Navigate to the backend directory:

    ```bash
    cd backend
    ```

    Run the initialization script:

    ```bash
    node src/models/setupDb.js
    ```

    This script will create the necessary tables in your SQLite database. You only need to run this script once.

3. **Verifying Database Setup**: After running the setup script, you can verify the creation of the database file and tables using any SQLite browser or command-line tool.

4. **Database Configuration**: The application is configured to connect to this SQLite database by default. If you have custom configurations or a different database, update the database connection settings in the backend application.

## Setup and Run Guide

This guide will take you through the steps to set up and run the Certificate Management System on your local machine.

### Prerequisites

- Node.js (v14 or later)
- npm (comes with Node.js)
- Git

### Cloning the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/syytruong/qt-assignment.git
cd qt-assignment
```

### Backend Setup
Navigate to the backend directory:

```bash
cd backend
```

Install the necessary dependencies:

```bash
npm install
```

Start the backend server:
```bash
npm run dev
```
The server should now be running on http://localhost:3001.

### Frontend Setup
Open a new terminal window. Navigate to the frontend directory:

```bash
cd frontend
```

Install the necessary dependencies:

```bash
npm install
```

Start the React development server:
```bash
npm start
```

The application should now be accessible at http://localhost:3000.

### Accessing Swagger API Documentation
With the backend running, you can access the Swagger API documentation at http://localhost:3001/api-docs to explore and test the API endpoints.

### Running Tests

To run the unit tests for the backend:

```bash
cd backend
npm test
```