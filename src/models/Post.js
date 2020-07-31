const mongoose = require('mongoose');
const aws = require("aws-sdk");

const PostSchema = new mongoose.Schema({
    name: String,
    size: Number,
    key: String,
    url: String,
    createdAt:{
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Post", PostSchema);