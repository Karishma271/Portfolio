# My Portfolio Backend
This repository contains the backend code for my portfolio website. It provides two APIs to retrieve contact information and project details.

## Getting Started
To get started with the project, you'll need Node.js and npm installed on your machine.

1. **Clone the repository:**
git clone https://github.com/Suyash0028/my-portfolio-backend.git

2. **Install dependencies and start the server:**
Run these commands:
   - cd my-portfolio-backend
   - npm install && npm start
By default, the server will run on port 3000. You can change the port by setting the `PORT` environment variable.

## Available APIs

### 1. Get Contact Info

- **Endpoint**: `/about`
- **Method**: GET
- **Description**: Retrieves contact information.

### 2. Get Projects Info

- **Endpoint**: `/projects`
- **Method**: GET
- **Description**: Retrieves information about projects.

## Environment Variables

The following environment variable can be configured:

- `PORT`: The port number on which the server will listen. Default is 3200.
- `DB_URL`: The Database url from where the data will be fetched.

## Contributing
Contributions are welcome! If you find any issues or would like to suggest improvements, please open an issue or create a pull request.