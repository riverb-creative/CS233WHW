const Mongoose = require('mongoose');
const Item = require("../models/Item");
const { body, validationResult } = require('express-validator');

//---get all list items---
exports.getAllListItems = async (request, response) => {
    let theSection = req.query.section;
    
    const myCategory = Item.filter(data => data.section === String(theSection));
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
       
    try {
        const items = await Item.find();
        response.status(200).json(items);
    }
    catch (error) {
        response.status(500).json({ error: "Server error: " + error });
    }
    }
}

//get single item based off the id

exports.getItemById = async (request, response) => {
    const theId = request.params.itemId;
    
    if(theId) {
        try {
            const item = await Item.find(theId);
            response.status(200).json(item);
        }
        catch (error) {
            response.status(500).json({ error: "Server error: " + errorMsg });
        }
    }
    else {
        //if no year is specified, show them all the items
        try {
        const item = await Item.find();
        response.status(200).json(item);
        }
        catch (errorMsg) {
            response.status(500).json({ error: "Server error: " + errorMsg });
        }
    } 
}

// create a new movie by its body of request

exports.addItem = [
    body("itemName").notEmpty().withMessage("The item name is required"), 
    body("itemSection").notEmpty().isIn(["canine", "feline", "rodent"]).withMessage("The item section is required"),
    body("itemDesc").notEmpty().withMessage("Description is required!")
],

async (request, response) => {

    //results of the validation
    const theResult = validationResult(req);
    const theError = theResult.array();
    //URL of the form the user is accessing
    const theURL = req.originalUrl;
    
    if(theResult.isEmpty()) {
    const myNewItem = {
        itemName: request.body.itemName,
        section: request.body.itemSection,
        desc: request.body.itemDesc,
        coupon: request.body.itemCoupon
    }

    try {
        const myResult = await Item.create(myNewItem);
        response.status(200).json({items: myResult});
    }
    catch (errorMsg) {
        response.status(500).json({ error: "Server error: " + errorMsg }); 
    }
}
    else {
        response.status(400).render("errors", { title: "Fix Your Errors!", appName: "Try Again", errors: theError, urlPath: theURL})
    }

}

// Update a an item by ID
exports.updateItem = async (request, response) => {
    try {
        const item =
            await Item.findByIdAndUpdate(
                request.params.itemId,
                request.body, { new: true }
            );
        if (!item) {
            return response.status(404)
                .json({ error: 'Item not found' });
        }
        response.json(item);
    } catch (error) {
        response.status(500)
            .json({ error: error.message });
    }
}
// delete a shopping list item by its MongoDB _id value
// the id will be in a URL parameter http://localhost:3000/api/list/THEITEMIDYOUWANT

exports.deleteItem = async (request, response) => {
    if(!Mongoose.Types.ObjectId.isValid(request.params.theId)) {
        return response.status(400);
    }


    const myId = request.params.theId;

    try {
        const deletedItem = await Item.findByIdAndDelete(myId);
        response.status(200).json({item: deletedItem});
    }

    catch (errorMsg) {
         response.status(500).json({ error: "Server error: " + errorMsg });
    }
}