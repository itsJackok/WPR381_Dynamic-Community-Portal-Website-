const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/home');
});

router.get('/about', (req, res) => {
  res.render('pages/about');
});

const eventsArray = [
  {
    title: "Beach Cleanup",
    date: "2025-05-15",
    location: "Port Alfred",
    image: "beach.jpg"
  },
  {
    title: "Coding Workshop",
    date: "2025-06-01",
    location: "Online",
    image: "workshop.png"
  }
];

router.get('/events', (req, res) => {
  res.render('pages/events', { events: eventsArray });
});

router.get('/contact', (req, res) => {
  res.render('pages/contact');
});

router.get('/thankyou', (req, res) => {
  res.render('pages/thankyou');
});

module.exports = router;
