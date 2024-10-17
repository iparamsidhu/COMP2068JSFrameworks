const express = require('express');
const router = express.Router();

// Home Page
router.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

// About Page
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Me' });
});

// Projects Page
router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects' });
});

// Resume Page
router.get('/resume', (req, res) => {
  res.render('resume', { title: 'Resume' });
});

// Contact Me Page
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;