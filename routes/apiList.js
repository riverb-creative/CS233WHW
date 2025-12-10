/**----------------------------
     * apiRouter.js
     * 
     * routes that all begin with /api
*/
    
    const express = require('express');
    const mongoose = require('mongoose');
    const router = express.Router();
    const Item = require("../models/Item");
    const shoppingListController = require('../controllers/shoppingListController');

router.get("/api/list", shoppingListController.getAllListItems);

router.get("/api/list/:itemId", shoppingListController.getItemById);

router.post("/api/list", shoppingListController.addItem);

router.put("api/list/:itemId", shoppingListController.updateItem);

router.delete("/api/list/:itemId", shoppingListController.deleteItem);

module.exports = router;