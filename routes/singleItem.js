/**
 * singleItem.js
 * 
 * all of the route definitions for catalog-related paths
 * http://localhost:3000/singleItem
 * 
 */

//import or require all of the desired frameworks/libraries/resources
const express = require('express');
const router = express.Router();
const myListItems = require('../data/data');

router.get("/:id", (req, res) => {
   //get the specific employee ID from the url
   const theItemID = req.params.id;
   
   //create JavaScript to query the employeeList collection
   //retrieve the object just for this particular employee
   const theItem = myListItems.find((item) => item.id === Number(theItemID));

   //response.render that requested a template for a single employee page
   //pass the object for the current employee to that template
   res.render('item', {title: "Single Item View", appName: "Viewing Single Item:", item: theItem });
});

module.exports = router;