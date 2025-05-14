const express = require('express');
const path = require('path');
const app = express();
const pageRoutes = require('./routes/pageRoutes');


app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, 'public'))); 


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use('/', pageRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
