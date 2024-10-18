const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.render('Home');
});

// About Me route
router.get('/about', (req, res) => {
  res.render('AboutMe');
});

// Projects route
router.get('/projects', (req, res) => {
  res.render('Projects');
});

// Contact route
router.get('/contact', (req, res) => {
  res.render('ContactMe');
});

module.exports = router;