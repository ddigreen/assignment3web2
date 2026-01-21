# Simple Blog API (Node.js & MongoDB)

A RESTful API for a simple blogging platform built using Node.js, Express, and MongoDB. This project allows users to create, read, update, and delete (CRUD) blog posts. It includes data validation, error handling, and a basic frontend interface.

---

## 🚀 Features

- CRUD Operations (Create, Read, Update, Delete)
- MongoDB Atlas cloud database
- Data validation (required fields & valid IDs)
- Error handling with HTTP status codes
- Simple frontend interface (HTML + JS)

---

## 🛠 Tech Stack

- Runtime: Node.js  
- Framework: Express.js  
- Database: MongoDB Atlas  
- ODM: Mongoose  
- Testing: Postman / Thunder Client  

---

## 📂 Project Structure

```
blog-api-assignment/
│
├── models/
│   └── Blog.js
│
├── public/
│   └── index.html
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Prerequisites

- Node.js installed  
- MongoDB Atlas account  

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Environment Configuration

Create a `.env` file:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.atkwice.mongodb.net/blog-api
PORT=3000
```

---

### 4. Run the Server

```bash
node server.js
```

---

## 🔌 API Endpoints

### Create a Post
POST `/blogs`

```json
{
  "title": "My New Post",
  "body": "This is the content of the blog.",
  "author": "Student Name"
}
```

### Get All Posts
GET `/blogs`

### Get Single Post
GET `/blogs/:id`

### Update a Post
PUT `/blogs/:id`

```json
{
  "title": "Updated Title",
  "body": "Updated content."
}
```

### Delete a Post
DELETE `/blogs/:id`

---

## 🧪 Testing

- Postman / Thunder Client
- Browser: http://localhost:3000/blogs
- Frontend: open public/index.html

---

## 📝 Author

[Your Name]  
Assignment 3: Building a CRUD API with Node.js and MongoDB
