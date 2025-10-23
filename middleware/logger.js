/**
 * logger.js
 * 
 * Middleware that is applied at the application level
 * in order to create a record of each request made to the application
 * 
 * Author: River
 * Date:   10/24/2025
 */

const fs = require('fs');
const path = require('path');

const logFilePath = path.resolve("./logs/request.log");

const logger = (request, response, next) => {
    //get the system date and time
    const timestamp = new Date().toISOString();
    const requestMethod = request.method;
    const requestPath = request.originalUrl;

    //uses
    const jsonReq = "REQ: " + timestamp + " || " + requestMethod + " || " + requestPath;
    fs.appendFile(logFilePath, jsonReq, (error) => {
        if(error) {
        console.error("error please do something: ", error);
        const theError = new Error("Something is wrong :(");
        theError.status = 400;
        }
    });

    next();
}

module.exports = logger;