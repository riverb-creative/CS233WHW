/**
 * about.js
 * 
 * about information for developer
 * http://localhost:3000/about
 * 
 */

//import or require all of the desired frameworks/libraries/resources
const express = require('express');
const router = express.Router();

//route that takes user to about developer page
 router.get('/', (req, res) => {
        res.send("<ul><li>App Name: Such Fancy Shopping List</li></li><li>Name: River</li><li>Term: FALL 2025</li></ul>");
    });

module.exports = router;