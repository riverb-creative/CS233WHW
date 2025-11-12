/**
 * shoppingList.js
 * 
 * sends information of single shopping item to the item.ejs file
 * http://localhost:3000/singleItem
 * 
 */

//import or require all of the desired frameworks/libraries/resources
const express = require('express');
const router = express.Router();
const listItems = require('../data/data');

router.get("/:id", (req, res) => {
   //get the specific employee ID from the url
   const theItemID = req.params.id;
   
<<<<<<< HEAD
   //create JavaScript to query the listItems collection
=======
   //create JavaScript to query the myListItems collection
>>>>>>> 55271e1c903b7b89bb9dac989796e81afa96ccde
   //retrieve the object just for this particular employee
   const theItem = listItems.find((item) => item.id === Number(theItemID));

   //response.render that requested a template for a single employee page
   //pass the object for the current employee to that template
   res.render('item', {title: "Single Item View", appName: "Viewing Single Item:", item: theItem });
});

module.exports = router;