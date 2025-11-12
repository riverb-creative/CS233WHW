/**
 * deleteListItems.js
 * 
 * sends information of deleteListItem to the deleteItem.ejs file
 * http://localhost:3000/deleteListItem
 * 
 */

//import or require all of the desired frameworks/libraries/resources
const express = require('express');
const router = express.Router();
const listItems = require('../data/data');
const { body, validationResult } = require('express-validator');

router.post('/', (req, res) => {
    // Access the item name from the request body
    const itemOptions = req.body.itemOptions; 
    
    // ... rest of your validation code (which doesn't seem to use theItemName) ...
    const theResult = validationResult(req);
    const theError = theResult.array();
    const theURL = req.originalUrl;
    
    // find the itemName from the deleteItem form
    // if the itemIndex is found delete that item from the data array
    // else show error
    const itemIndex = listItems.findIndex((item) => item.itemName === itemOptions);

    if(itemIndex !== -1) {
        listItems.splice(itemIndex, 1);
        // Successful deletion, redirect
        res.redirect("/shoppingList"); 
    }
    else {
        // Item not found or other error
        res.status(400).render("errors", { title: "Try Again!", appName: "Item Not Found", errors: theError, urlPath: theURL})
    }
});

//access to the deleteItem form

router.get('/', (req, res) => {
     res.render("deleteItem", { title: "Delete Item Form", appName: "Select Item to Delete", listItems });
});


module.exports = router;