# hire.me--proj2

This Job Search Application is a full-stack web application designed to assist users in their job search process. It provides a platform where job seekers can explore and apply for available job opportunities utilizing the users entered parameters. The application is built using a combination of Node.js, Express.js, Handlebars.js, MySQL, Google Cloud Talent Solution API, BULMA and Sequelize ORM.

## Table of Contents

- [Overview](#overview)
- [Project Requirements](#project-requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Deployment](#deployment)
- [Code Quality](#code-quality)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

Projects play a crucial role in the journey of becoming a full-stack web developer. This project is designed to showcase our collaborative skills and coding abilities, serving as a focal point of our portfolio. By creating a real-world full-stack application using the technologies and principles learned throughout the boot camp so far, we will demonstrate our capabilities.

## Project Requirements

How this project meets requirements:

- Utilize Node.js and Express.js to create a RESTful API.
- Use Handlebars.js as the template engine.
- Employ MySQL and the Sequelize ORM for the database.
- Implement both GET and POST routes for retrieving and adding new data.
- Incorporate at least one new library, package, or technology that hasn't been discussed in the boot camp. (BULMA & GOOGLE API)
- Follow the MVC paradigm with an appropriate folder structure.
- Include authentication using express-session and cookies.
- Safeguard API keys and sensitive information by utilizing environment variables.
- Deploy the application using Heroku, including the necessary data.
- Delivering a polished UI that is responsive and interactive, accepting and responding to user input.
- Adhere to good-quality coding standards, including file structure, naming conventions, best practices for class/id naming conventions, indentation, and quality comments.

## Installation

1. Clone the repository:

   
   git clone https://github.com/BrockHanni/hire.me--proj2
   

2. Change to the project's root directory:

   cd hire.me--proj2
  

3. Install the required dependencies by running:

   npm install
  

4. Configure the environment variables:

   - Create a `.env` file in the root directory.
   - Define the required environment variables, such as API keys and database credentials, in the `.env` file.

5. Set up the database:

   - Create a MySQL database.
   - Update the database configuration in `config/config.json` to match your database settings.

6. Run the application:

 
   npm start
   

7. Access the application in your web browser at `http://localhost:3001`.

## Usage

Describe how to use the application and provide any additional instructions or usage examples.

## Technologies Used

- Node.js
- Express.js
- Handlebars.js
- MySQL
- Sequelize ORM
- Google Cloud Talent Solution API 
- Bulma CSS framework

## Features

- Create an account
- Account login
- Ability to adjust parameters to meet user needs for job search
- Ability to store resume and portfolio
- Ability to link to e-application


## Folder Structure

Explaination of the MVC paradigm 

```
hire.me--proj2/
├── config/
│   └── connection.js/
├── controllers/
│   ├── api/
│     ├── index.js/
│     ├── projectRoutes.js/
│     └── userRoutes.js/
│   ├── homeRoutes.js/
│   └── index.js/
├── db/
│   ├── schema.sql/
│   └── seeds.sql/
├── html pages/
│   ├── createAccountPage.html/
│   ├── loginPage.html/
│   └── searchPage.html/
├── models/
│   ├── index.js/
│   ├── Project.js/
│   └── User.js/
├── node_modules/
├── public/
│   ├── css/
│     ├── jass.css/
│     └── style.css/
│   └── js/
│     ├── login.js/
│     ├── logout.js/
│     └── profile.js/
├── utils/
│   ├── auth.js/
│   └── helpers.js/
├── views/
│   ├── layouts/
│     ├── main.handlebars/
│   ├── homepage.handlebars/
│   ├── login.handlebars
│   └── project.handlebars/
├── .env/
├── package-lock.json/
├── package.json
├── README.md/
└── server.js
```


## Deployment

The application is deployed using Heroku. To access the deployed version, visit {HEROKU LINK}.

## Code Quality

The code for this application follows good-quality coding standards, including file structure, naming conventions, best practices for class/id naming conventions, indentation, and quality comments.

## Contributing

Brock Hanni
Rush Burriel
Geoffery Eidem
Danielle Memmott


## License

This project does not currently utilize a license.

## Contact

This will include contact information for Rush, Brock, Geoffery, and Danielle in the future
