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
const Item = require('../models/Item');
const listItems = require('../data/data');

router.get('/', async (req, res) => {
    // res.json(listItems);
    try{
        const myItem = await Item.find()
     res.render("list", { title: "List of Items", appName: "Entire Shopping List", myItem });
    } 
    catch (error) {
        res.status(500).send("Apologies, there was a problem with the shopping list" +
                                error);
    }
});

module.exports = router;