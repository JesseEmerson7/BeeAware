# BeeAware

[![License](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Build Status](https://travis-ci.com/your-username/beeaware.svg?branch=main)](https://travis-ci.com/your-username/beeaware)
[![Heroku](https://heroku-badge.herokuapp.com/?app=your-app-name)](https://your-app-name.herokuapp.com)

BeeAware is a web application designed to educate users about bees and everything related to bees. It features various sections that provide valuable information and resources about bees, as well as interactive features for user engagement. The app is built using Node.js, Express, React, and MongoDB.

## Features

- **Ask a Beekeeper**: Users can ask questions and seek advice from experienced beekeepers.
- **Forum**: Users can participate in discussions, share knowledge, and connect with other bee enthusiasts.
- **Medical Section**: Provides information about bee-related allergies and links to official medical resources.
- **User Authentication**: Users can create an account, log in, and access personalized features.
- **Responsive Design**: The app is optimized for different devices and screen sizes.

## Folder Structure

The project has the following folder structure:

├── client/ # Frontend code
│ ├── public/ # Public assets and index.html
│ └── src/ # React components and app-specific files
│ ├── components/ # Reusable components
│ ├── App.js # Main component
│ └── index.js # Entry point
├── server/ # Backend code
│ ├── controllers/ # Controllers for business logic
│ ├── models/ # Mongoose models
│ ├── routes/ # API routes
│ ├── config/ # Configuration files
│ └── server.js # Server entry point
├── .env # Environment variables
└── ...

less
Copy code

## Prerequisites

Before running the application, make sure you have the following installed:

- [Node.js](https://nodejs.org): Version 12 or higher
- [MongoDB](https://www.mongodb.com)

## Getting Started

1. Clone the repository:

```shell
git clone https://github.com/JesseEmerson7/BeeAware
Install dependencies:

shell
Copy code
cd beeaware
npm run install
Configure the environment variables:

Create a .env file in the server folder.
Define the following variables in the .env file:
MONGODB_URI: Connection string for your MongoDB database.
JWT_SECRET: Secret key used for JWT authentication.
Seed the database (optional):

Run the following command to seed the database with some initial data:

shell
Copy code
npm run seed
Build the frontend:

shell
Copy code
npm run build
Start the application:

shell
Copy code
npm start
Open your browser and navigate to http://localhost:3001 to view the application.

Deployment
The BeeAware app can be deployed on Heroku. Follow these steps:

Create a new Heroku app:

shell
Copy code
heroku create your-app-name
Set the necessary environment variables on Heroku:

Go to the "Settings" tab of your Heroku app.
Under the "Config Vars" section, add the following variables:
MONGODB_URI: Connection string for your MongoDB database.
JWT_SECRET: Secret key used for JWT authentication.
Deploy the app to Heroku:

shell
Copy code
git push heroku main
Open the app in your browser:

shell
Copy code
heroku open
Contributing
Contributions to BeeAware are welcome! If you find any issues or have suggestions for improvements, please create a new issue or submit a pull request.

Contributors
Adam Abulkheir (@adamabulkheir)
Ayden Lopez-Laclaustra (@aydenemateo)
Alex Climenco (@AlexC3105)
Jesse Emerson (@JesseEmerson7)
Youlormans Hilaire (@youlormansH)
License
This project is licensed under the ISC License.

javascript
Copy code
```
