```md
# Portfolio

This is a portfolio project built using the MERN stack (MongoDB, Express, React, Node.js) to showcase my projects and achievements.

## Features
- Display personal projects with details such as title, description, image, and links.
- Backend built with Node.js and Express to manage projects via RESTful API.
- Frontend built with React for a responsive and dynamic user interface.
- MongoDB used as a database to store project details.
- Deployed using modern cloud services.

## Technologies Used
- **MongoDB**: NoSQL database for storing project data.
- **Express**: Backend framework for building RESTful APIs.
- **React**: Frontend library for building the user interface.
- **Node.js**: Runtime environment for server-side JavaScript.

## Project Structure
```
portfolio/
│
├── client/               # React frontend
│   ├── public/           # Public assets for React
│   ├── src/              # Source files for React components
│   │   ├── components/   # React components
│   │   ├── App.js        # Main React component
│   │   ├── index.js      # Entry point for the React app
│   └── package.json      # React dependencies
│
├── models/               # Mongoose schemas
│   └── Project.js        # Project schema for MongoDB
│
├── routes/               # API routes
│   └── projects.js       # Routes for managing projects
│
├── .env                  # Environment variables (e.g., MongoDB URI)
├── server.js             # Entry point for the Express server
├── package.json          # Node.js backend dependencies
└── README.md             # Project documentation
```

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/yvonnegichovi/portfolio.git
cd portfolio
```

### 2. Backend Setup
1. Install backend dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory and add the following:
   ```bash
   MONGO_URI=your_mongodb_uri
   PORT=5000
   ```

3. Start the backend server:
   ```bash
   npm run dev
   ```

### 3. Frontend Setup
1. Navigate to the `client` folder:
   ```bash
   cd client
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the React app:
   ```bash
   npm start
   ```

### 4. Access the Application
- The backend server will run on `http://localhost:5000`.
- The frontend React app will run on `http://localhost:3000`.

## API Endpoints

### Fetch All Projects
- **GET** `/api/projects`

### Add a New Project
- **POST** `/api/projects`
- **Body**:
  ```json
  {
    "title": "Project Title",
    "description": "Project Description",
    "image": "Image URL",
    "link": "Project Link"
  }
  ```

## License
This project is open-source and available under the [MIT License](LICENSE).

## Contact
- **Email**: yvonnegichovi@gmail.com
- **GitHub**: (https://github.com/yvonnegichovi)
```