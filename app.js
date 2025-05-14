//Module Imports
const express = require('express');
const path = require('path');
const pageRoutes = require('./routes/pageRoutes');

//Initialize express
const app = express();

//Parse form data from POST
app.use(express.urlencoded({ extended: true }));
//Serve files from public  
app.use(express.static(path.join(__dirname, 'public'))); 

//Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Use routes from pageRoutes for requests
app.use('/', pageRoutes);

//Set port from .env or default (3000)
const PORT = process.env.PORT || 3000;

//Start server and log message for confirmation and site access
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
