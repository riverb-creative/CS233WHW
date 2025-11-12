/**
 * addListItems.js
 * 
 * sends information of addListItem to the addItem.ejs file
 * http://localhost:3000/addListItem
 * 
 */

//import or require all of the desired frameworks/libraries/resources

const express = require('express');
const router = express.Router();
const listItems = require('../data/data');
const { body, validationResult } = require('express-validator');

router.post("/", 
[
    body("itemName").notEmpty().withMessage("The item name is required"), 
    body("itemSection").notEmpty().isIn(["canine", "feline", "rodent"]).withMessage("The item section is required"),
    body("itemDesc").isAlpha().withMessage("Description must only contain letters!")
],
(req, res) => {
    //results of the validation
    const theResult = validationResult(req);
    const theError = theResult.array();
    //URL of the form the user is accessing
    const theURL = req.originalUrl;

// create new item and push it to the listItems
// if no errors redirect the user to the updated shoppingList page
// else show user the errors and link back to the addListItem form

    if(theResult.isEmpty()) {
        let theItemName = req.body.itemName;
        let theSection = req.body.itemSection;
        let theDesc = req.body.itemDesc;
        let theCoupon = req.body.itemCoupon;

        itemID = listItems.length + 1;



        let theNewItem = {
            id: itemID,
            itemName: theItemName,
            section: theSection,
            desc: theDesc,
            coupon: theCoupon
        }
        listItems.push(theNewItem);

        res.redirect("/shoppingList");
    }
    else {
        res.status(400).render("errors", { title: "Fix Your Errors!", appName: "Try Again", errors: theError, urlPath: theURL})
    }

    });

// access to the addItem form

    router.get('/', (req, res) => {
        // res.json(listItems);
         res.render("addItem", { title: "Add Item Form", appName: "Add Item to Shopping List", listItems });
    });
    

 module.exports = router;