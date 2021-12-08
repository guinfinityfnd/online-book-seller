const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    data: Object,
    // name: {
    //     type: String,
    //     required: true
    // },
    //  email: {
    //     type: String,
    //     required: true
    // },
    //   message: {
    //     type: String,
    //     required: true
    // },
    //    gender: {
    //     type: String,
    //     required: true
    // }
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;