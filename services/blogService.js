const Blog = require('../models/blog');

// create contact
exports.createBlog = (req, callback) => {
    let blogData = new Blog(req.body);
    blogData.save((err, savedBlog) => {
        if (!err) {
            console.log(`Blog created successfully with blogId:${savedBlog.contactId}`);
        }
        callback(err, savedBlog);
    });
}

// get blogs
exports.getBlogs = (callback) => {
    Blog.find((err, blogList) => {
        if (!err) {
            console.log(`Blogs loaded successfully:${blogList.length}`);
        }
        callback(err, blogList);
    });
}

// get blog by ID
exports.getBlogById = (_blogId, callback) => {
    Blog.findOne({blogId: _blogId}, (err, blogObj) => {
        if (!err) {
            console.log(`Contact loaded successfully:${blogObj.blogId}`);
        }
        callback(err, blogObj);
    });
}

// update
exports.updateBlog = (_blogId, blogData, callback) => {
    Blog.updateOne({ blogId: _blogId }, blogData, (err, status) => {
        let msg = '';
        if (!err) {
            if (status.n == 1 && status.ok == 1) {
                msg = 'Blog updated successfully'
            }
        }
        callback(err, msg);
      });
}

// delete
exports.deleteBlog = (_blogId, callback) => {
    Blog.deleteOne({blogId: parseInt(_blogId) }, function(err, status){
        let msg = '';
        if (!err) {
            if (status.n == 1 && status.ok == 1) {
                msg = 'Contact deleted successfully'
            }
        }
        callback(err, msg);
      });
}