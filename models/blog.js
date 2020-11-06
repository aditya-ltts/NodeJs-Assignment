const mongoose = require('./mongo'); //importing connection config
var autoIncrement = require('mongoose-auto-increment'); //for auto incrementing during create

// mongoose.Schema is a class - creating an obj for it
var Blog = new mongoose.Schema({
    blogId: Number,
    name: String,
    headline: String,
    body: String,
    createdOn: { type: Date, default: Date.now },
    updatedBy: String,
    updatedOn: { type: Date, default: Date.now }
});

Blog.plugin(autoIncrement.plugin, { model: 'Blog', field: 'blogId', startAt: 1 });
// making the above schema as model
module.exports = mongoose.model('Blog', Blog);