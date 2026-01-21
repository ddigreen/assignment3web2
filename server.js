require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Blog = require('./models/Blog');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/blogDB')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));



app.post('/blogs', async (req, res) => {
    try {
        const blog = new Blog(req.body);

        const savedBlog = await blog.save();

        res.status(201).json(savedBlog);

    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({ error: "Validation Error", messages });
        }
        res.status(500).json({ message: error.message });
    }
});

app.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/blogs/:id', async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Blog ID format" });
        }

        const blog = await Blog.findById(id);

        if (!blog) {
            return res.status(404).json({ message: "Blog post not found" });
        }

        res.status(200).json(blog);

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

app.get('/blogs/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ message: "Blog not found" });
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.put('/blogs/:id', async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedBlog) return res.status(404).json({ message: "Blog not found" });
        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.delete('/blogs/:id', async (req, res) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
        if (!deletedBlog) return res.status(404).json({ message: "Blog not found" });
        res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));