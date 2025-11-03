/**
 * CS 233W Homework 1 - Creating Shopping List Application
 * using only the express.js web framework
 * 
 * River Breazile 
 * 
 * CS 233W
 * 
 * Oct. 22nd 2025
 */


// import desired framework

    const express = require('express');
    const app = express();
    const logger = require('./middleware/logger');
    const data = require('./data/data');

//allow this server to take advantage of the JSON middleware
    app.use(express.json());
    app.use(express.static("public"));
    app.use(logger);

    const homepage = require('./routes/index');
    const shoppingList = require('./routes/shoppingList');
    const singleItem = require('./routes/singleItem');
    const listRoutes = require('./routes/lists');
    const aboutDeveloper = require('./routes/about');

// set listening port value
    const PORT = 3000;
    app.set("view engine", "ejs");
    app.set("views", "./views");

//mount each of the routing files, associating it with its starter path
    app.use('/', homepage);
    app.use('/shoppingList', shoppingList);
    app.use('/singleItem', singleItem);
    app.use('/lists', listRoutes);
    app.use('/about', aboutDeveloper);

//using theError middleware to check if an error has occurred when entering information
    app.use((theError, req, res, next) => {
            console.error("[ERROR] " + theError.message);
            const theStatus = theError.status || 500;
            res.status(theStatus).json({ issue: "There's a problem " + theError.message });

    });

//starting the server

    app.listen(PORT, () => {
        console.log("Server started; running at http:localhost:" + PORT);
    });