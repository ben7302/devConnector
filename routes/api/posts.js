const express = require('express');
const router = express.Router();
const passport = require('passport')
// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Posts Works' }));

// @route   GET api/posts
// @desc    Get posts
// @access  Public
router.get('/posts', (req, res) => res.json({ msg: 'Posts Works' }));

// @route   GET api/posts/:id
// @desc    Get post by id
// @access  Public
router.get('/posts/:id', (req, res) => res.json({ msg: 'Posts Works' }));

// @route   POST api/posts
// @desc    Create post
// @access  Private
router.post('/posts', passport.authenticate("jwt", { session: false }),(req, res) => res.json({ msg: 'Posts Works' }));

// @route   DELETE api/posts/:id
// @desc    Delete post
// @access  Private
router.delete('/posts/:id', (req, res) => res.json({ msg: 'Posts Works' }));

// @route   POST api/posts/like/:id
// @desc    Like post
// @access  Private
router.post('/posts/like/:id', (req, res) => res.json({ msg: 'Posts Works' }));

// @route   POST api/posts/unlike/:id
// @desc    Unlike post
// @access  Private
router.post('/posts/unlike/:id', (req, res) => res.json({ msg: 'Posts Works' }));

// @route   POST api/posts/comment/:id
// @desc    Add comment to post
// @access  Private
router.post('/posts/comment/:id', (req, res) => res.json({ msg: 'Posts Works' }));

// @route   DELETE api/posts/comment/:id/:comment_id
// @desc    Remove comment from post
// @access  Private
router.get('/posts/comment/:id/:comment_id', (req, res) => res.json({ msg: 'Posts Works' }));

module.exports = router;
