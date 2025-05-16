# Community Portal Project

## Overview

This project was designed to demonstrate and apply dynamic content rendering, express routing (modular), form handling, as well as data data management using arrays and loops.

## GitHub Repository

[To view repo, Click Here]()

## Team Members & Roles

| Name             | Student Number |
|------------------|----------------|
| Jack Mapheto     | 601370         |
| Ryan Andrews     | 601135         |
| Zirong Luo       | 600287         |
| Tristan Ball     | 601541         |

| Name             | Role           |
|------------------|----------------|
| Tristan Ball     | Team Lead      |
| Everyone         | Frontend Dev   |
| Everyone         | Backend Dev    |
| Everyone         | Data Manager   |
| Tristan Ball     | Doc Manager    |

## Technologies

- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- Bootstrap 5
- Git & GitHub

## Setup

1. **Clone Repository**
    Clone from the github repository webapp under code, or use git clone <url> in bash.
2. **Install Dependencies**
    npm install 
3. **Run app**
    npm run dev
4. **Visiting the site**
    Shift left-click to go to http://localhost:3000,
    or open the site in the browser

## Project Structure

project/
├── views/
│   ├── pages/
│   │   ├── home.ejs
│   │   ├── about.ejs
│   │   ├── events.ejs
│   │   ├── contact.ejs
│   │   └── thankyou.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
├── public/
│   ├── css/
│   └── images/
├── routes/
│   └── pageRoutes.js
├── app.js
├── package.json
└── .gitignore