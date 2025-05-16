# Community Portal Project

## Overview

This project was designed to demonstrate and apply dynamic content rendering, express routing (modular), form handling, as well as data data management using arrays and loops.

## GitHub Repository

[To View the Repo, Click Here](https://github.com/itsJackok/WPR381_Dynamic-Community-Portal-Website-)

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
- GitHub

## Setup

1. **Clone Repository**
    Clone from the github repository webapp under code, or use git clone <url> in bash.
2. **Install Dependencies**
    npm install 
3. **Run app**
    npm run dev
4. **Visiting the site**
    ctrl left-click to go to http://localhost:3000,
    or open the site in the browser

## Project Structure
```

WPR381_Dyanmic-Community-Portal-Website-/
├── public/ # Static assets
│ ├── css/
│ │ └── style.css # Custom styles
│ └── images/
│   ├── art.jpg
│   ├── cleanUp.jpg
│   ├── entre.jpg
│   ├── food.jpeg
│   └── Wellness.jpg
├── routes/
│ └── pageRoutes.js
├── views/
│ ├── pages/
│ │ ├── home.ejs
│ │ ├── about.ejs
│ │ ├── events.ejs
│ │ ├── contact.ejs
│ │ └── thankyou.ejs
│ └── partials/
│ ├── header.ejs
│ └── footer.ejs
├── .gitignore
├── app.js
├── package.json 
├── package-lock.json
└── README.md

```