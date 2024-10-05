## API Documentation: 

## `HTTP Status Code Summary`

| Status Code | Status                  | Description                                                            |
|-------------|-------------------------|------------------------------------------------------------------------|
| `200 `        | OK                      | The request was successful, and the server returned the requested data.|
| `201`         | Created                 | The request was successful, and a new resource was created.            |
| `204 `        | No Content              | The request was successful, but there is no content to return.         |
| `301`         | Moved Permanently       | The resource has been permanently moved to a new URL.                 |
| `302`         | Found                   | The resource is temporarily located at a different URL.               |
| `304`         | Not Modified            | The resource has not been modified since the last request.            |
| `400 `        | Bad Request             | The server could not understand the request due to invalid syntax.    |
| `401 `        | Unauthorized            | Authentication is required, and the request has not been applied.     |
| `403`         | Forbidden               | The server understood the request but refuses to authorize it.        |
| `404 `        | Not Found               | The requested resource could not be found on the server.              |
| `409  `       | Conflict                | The request could not be completed due to a conflict with the current state of the resource. |
| `500 `        | Internal Server Error   | The server encountered an unexpected condition that prevented it from fulfilling the request. This often indicates a bug in the server-side code or an unhandled exception. |




## HTTP Method Overview

The HTTP method of an endpoint defines the type of action it performs on a given resource. Here are some common HTTP methods used in the REST API:

- **GET**: Used for retrieving resources.
- **POST**: Used for creating resources.
- **PATCH**: Used for updating properties of resources.
- **PUT**: Used for replacing resources or collections of resources.
- **DELETE**: Used for deleting resources.


## Installation

Follow these steps to set up the project locally:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A database (if applicable, e.g., MongoDB, PostgreSQL)

### Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/your-username/project-name.git
cd project-name

```

### Install Dependencies

Run the following command to install the necessary dependencies:



```bash
npm install
```

### Set Up Environment Variables

Create a .env file in the root directory and add the necessary environment variables. You can use the following template:



```makefile
PORT=3000
DB_URI=mongodb://localhost:27017/your-db-name
JWT_SECRET=your_jwt_secret
```


### Run the Application

You can start the application using the following command



```bash
npm start
```

The server should now be running at `http://localhost:3000`


### Access the API

You can now access the API at `http://localhost:3000/api`.


### API Overview

The API allows you to perform various operations, such as creating, reading, updating, and deleting resources. You can interact with the API using different HTTP methods (GET, POST, PATCH, DELETE) depending on the operation you want to perform.

### Authentication

Some endpoints may require authentication. To access these protected routes, you will need to include a JSON Web Token (JWT) in your requests. Follow these steps to obtain and use the token:

1. **Obtain a Token**:
   - Use the `/login` endpoint to authenticate a user and receive a token.
   - **Example Request**:
     ```bash
     curl -X POST http://localhost:3000/api/login \
     -H "Content-Type: application/json" \
     -d '{"username": "your_username", "password": "your_password"}'
     ```
   - **Example Response**:
     ```json
     {
         "token": "your_jwt_token_here"
     }
     ```

2. **Include the Token in Requests**:
   - For any request to protected routes, include the token in the `Authorization` header.
   - **Example Header**:
     ```
     Authorization: Bearer your_jwt_token_here
     ```

### Using cURL to Access the API

You can use `cURL` to interact with the API directly from the command line. Here are some examples:

#### List Resources

To retrieve a list of resources, you can send a GET request:

```bash
curl -X GET http://localhost:3000/api/resources


```

### Using Postman

You can use Postman, a popular API client, to easily interact with your API. Postman allows you to send requests and view responses without needing to write any code. Follow these steps to get started:

#### 1. Open Postman

- Download and install Postman from the [official website](https://www.postman.com/downloads/) if you haven't already.
- Open the Postman application.

#### 2. Create a New Request

- **Click on "New"** in the top left corner or select **"Create a request"** from the dashboard.
- In the **"Request name"** field, give your request a descriptive name.
- Choose the appropriate HTTP method for your request:
  - **GET**: To retrieve data.
  - **POST**: To create a new resource.
  - **PATCH**: To update an existing resource.
  - **DELETE**: To remove a resource.

- **Enter the URL** for the endpoint you want to access. For example:

http://localhost:3000/api/resources



#### 3. Set Up Authentication (if required)

If your endpoint requires authentication, you’ll need to include a JWT (JSON Web Token) in your request:

- Navigate to the **"Authorization" tab** located below the URL field.
- In the "Type" dropdown, select **"Bearer Token"**.
- In the **"Token" field**, paste your JWT token obtained from the login endpoint.

#### 4. Set Request Body (for POST and PATCH)

If you're creating or updating a resource (using POST or PATCH), you’ll need to include data in the request body:

- Switch to the **"Body" tab**.
- Select the **"raw"** option.
- From the dropdown to the right, choose **"JSON"**. This sets the `Content-Type` header to `application/json`.

- Enter your JSON data in the provided field. For example, to create a new resource, you might enter:
```json
{
    "name": "New Resource"
}
```