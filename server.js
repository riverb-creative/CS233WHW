/**
 * CS 233W Homework 1 - Creating Shopping List Application
 * using only the express.js web framework
 * 
 * River Breazile 
 * 
 * CS 233W
 * 
 * Oct. 8th 2025
 */


// import desired framework

    const express = require('express');
    const app = express();

// set listening port value
    const PORT = 3000;

//create object of date
    const dateAndTime = new Date();

//format object of date into readable string
    const getDateTime = dateAndTime.toLocaleString();

//configuring the routes

    app.get('/', (request, response) => {
        response.send(`<h1>Such Fancy Shopping List</h1><h2>Current Date and Time:</h2><em>${getDateTime}</em>`);
    })

    app.get('/about', (request, response) => {
        response.send("<ul><li>App Name: Such Fancy Shopping List</li></li><li>Name: River</li><li>Term: FALL 2025</li></ul>");
    })

//starting the server

    app.listen(PORT, () => {
        console.log("Server started; running at http:localhost:" + PORT);
    })