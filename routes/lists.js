/**
 * lists.js
 * 
 * all of the route definitions for catalog-related paths
 * http://localhost:2500/lists
 * 
 */

//import or require all of the desired frameworks/libraries/resources
const express = require('express');
const router = express.Router();
const myListItems = require('../data/data');

router.get('/', (req, res) => {
    res.json(myListItems);
});

//route that showcases using external data from the ../../data/categories.js file
router.get("/:id", (req, res) => {
    //extract the data from the parameter
    const listId = req.params.id;

    //use that value to search through the data array and
    //return the object that contain an id that matches what's in listId 
    const myData = myListItems.find(data => data.id === Number(listId));

    //if myData has successfully found a match it will 
    //exist and will be a single data object         
    if(myData) {
        //if myData search was successful and myData is real data object
        res.send("<h1>Item ID: " + myData.id + "</h1><h2>Item Name: " + myData.itemName + "</h2><h3>Location: " +
                    myData.section + "</h3><h4> Description: " + myData.desc + "</h4>");
    }
    else {
        //else myData search was not successful
        res.status(404)
           .send("<h1>Sorry, no such item exists.</h1><br/><p>The id's we have on file are: 1, 2, 3, 4, 5, 6, and 7</p>");
    }
});

router.get("/search/mysearch", (req, res) => {
    //retrieve any query string data
    let theSection = req.query.section;
    
    const myCategory = myListItems.filter(data => data.section === String(theSection));

    //test to see if it exists
    if(theSection) {
        let theListItem = "<ul>";
        for( let i = 0; i< myCategory.length; i++) {
            theListItem += "<li>" + myCategory[i].itemName + "</li>"
     }  
        theListItem += "</ul>";
     
      res.send("<h1>Shopping List Category: " + theSection + "</h1><h2>" + theListItem + "</h2>");  
    }
    else {
        res.status(404)
           .send("<h1>Sorry, no such section exists</h1><br/><p>Try: canine, feline, or rodent.</p>");
    }
});

router.post("/add/item", (req, res) => {

    //it would more efficient to use the spread operator of object/array to create a copy of all
    //of the properties in the incoming data all at once
    const newItem = {
        id: myListItems.length + 1,
        ...req.body
    }

    if(newItem.itemName && newItem.section) {
        
      //push that object into the end of the array of categories  
            myListItems.push(newItem);

        //send some sort of success response
            res.status(201)
                .json(newItem); 
    }
    else {
          res.status(404)
          .json("Please either enter an Item Name or Section the item belongs in!"); 
    }

 });

 module.exports = router;
