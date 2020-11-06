const express = require('express');
const router = express.Router();

const blogService = require('../../services/blogService');

router.post('/', (req, res, next) => {
    blogService.createBlog(req, (err, data) => {
        if (!err) {
            res.json(data);
        } else {
            res.json(err);
        }
    });
});

router.get('/', (req, res, next) => {
    blogService.getBlogs((err,data) => {
        if (!err) {
            res.json(data);
        } else {
            res.json(err);
        }
    })
});

// GET blogs/1
router.get('/:id', (req, res, next) => {
    blogService.getBlogById(req.params.id, (err,data) => {
        if (!err) {
            res.json(data);
        } else {
            res.json(err);
        }
    });
});

// PUT blogs/1
router.put('/:id', (req, res, next) => {
    blogService.updateBlog(req.params.id, req.body, (err,data) => {
        if (!err) {
            res.json(data);
        } else {
            res.json(err);
        }
    });
});

// DELETE blogs/1
router.delete('/:id', (req, res, next) => {
    blogService.deleteBlog(req.params.id, (err,data) => {
        if (!err) {
            res.json(data);
        } else {
            res.json(err);
        }
    });
});

module.exports = router;