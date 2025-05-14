const express = require('express');
const router = express.Router();



const team = [
  { name: 'Jack Mapheto', stNumber: '601370', role: 'Team Leader' },
  { name: 'Ryan Andrews', stNumber: '601135', role: 'Backend Developer' },
  { name: 'Zirong Luo', stNumber: '600287', role: 'Frontend Developer' },
  { name: 'Tristan Ball', stNumber: '601541', role: 'Data Manager' }
];

const events = [
  { title: 'Cleanup Drive', date: '17 May 2025', time: '9:00 AM - 1:00 PM',  location: 'Park', image: 'cleanUp.jpg' },
  { title: 'Food Donation', date: '25 May 2025', time: '10:00 AM - 4:00 PM', location: 'Community Hall', image: 'food.jpeg' },
  { title: 'Health & Wellness Fair', date: '12 August 2025', time: '10:00 AM - 4:00 PM', location: 'Sports Complex', image: 'Wellness.jpg' },
  { title: 'Entrepreneurship Workshop', date: '13 June 2025', time: '6:00 PM - 8:00 PM', location: 'Community Centre', image: 'entre.jpg' },
  { title: 'Youth Art Exhibition', date: '16 June 2025', time: '10:00 AM - 5:00 PM', location: 'Arts Centre Gallery', image: 'art.jpg' },

];

const contactMessages = []; 


router.get('/', (req, res) => {
  res.render('pages/home', { title: 'Home' });
});


router.get('/about', (req, res) => {
  res.render('pages/about', {
    title: 'About Us',
    team
  });
});


router.get('/events', (req, res) => {
  res.render('pages/events', {
    title: 'Events',
    events
  });
});


router.get('/contact', (req, res) => {
  res.render('pages/contact', { title: 'Contact Us' });
});


router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;


  if (!name || !email || !message) {
    return res.status(400).send('All fields are required!');
  }


  contactMessages.push({ name, email, message, date: new Date() });


  res.redirect('/thankyou');
});


router.get('/thankyou', (req, res) => {
  res.render('pages/thankyou', { title: 'Thank You' });
});

module.exports = router;

