/**
 * Item.js
 * 
 * Mongoose schema definition for an item object
 * used to query, edit, add, and delete items from the 
 * shoppingList collection in MongoDB Atlas cluster
 * 
 * 11/21/2025
 */

//require access to Mongoose library
const mongoose = require("mongoose");

//create a schema definition - a blueprint of what the data in the collection
//                             "looks like". The property names, their data types
//                             and any other property settings desired
const itemSchema = new mongoose.Schema({
    itemName:  
        {type: String,
            required: true
        },
    section:   
        {type: String, 
            enum: ["canine", "feline", "rodent"],
            required: true
        },
    desc:     
        {type: String},
    coupon:    
        {type: Boolean,
            default: false
        },
});

module.exports = mongoose.model("Item", itemSchema);