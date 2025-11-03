/**
 * index.js
 * 
 * homepage for server
 * http://localhost:3000/index
 * 
 */

//import or require all of the desired frameworks/libraries/resources
const express = require('express');
const router = express.Router();

//create object of date
    const dateAndTime = new Date();

//format object of date into readable string
    const getDateTime = dateAndTime.toLocaleString();

//configuring the routes

    /*router.get('/', (request, response) => {
        response.send(`<h1>Such Fancy Shopping List</h1><h2>Current Date and Time:</h2><em>${getDateTime}</em>`);
    });*/

    router.get('/', (req, res) => {
        res.render('index', {title: "Shopping App Homepage", appName: "Such a Fun Shopping App", getDateTime});
    });

module.exports = router;