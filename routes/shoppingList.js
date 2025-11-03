/**
 * shoppingList.js
 * 
 * sends information of entire shopping list to the list.ejs file
 * http://localhost:3000/shoppingList
 * 
 */

//import or require all of the desired frameworks/libraries/resources
const express = require('express');
const router = express.Router();
const listItems = require('../data/data');

router.get('/', (req, res) => {
    // res.json(myListItems);
     res.render("list", { title: "List of Items", appName: "Entire Shopping List", listItems });
});

module.exports = router;