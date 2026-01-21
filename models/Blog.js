const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"], // Custom error message
        trim: true, // Removes whitespace from ends
        minlength: [3, "Title must be at least 3 characters long"] // Extra validation
    },
    body: {
        type: String,
        required: [true, "Body content is required"],
        minlength: [10, "Body must be at least 10 characters long"]
    },
    author: {
        type: String,
        default: "Anonymous"
    }
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);