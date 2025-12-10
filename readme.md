# CS 233W - Homework 06
## Author: River
### Date: 11/24/2025

**Description:** CS 233W Homework 06 - Transferring data to mongoDB atlas for data storage

Dependencies: 
    - express.js
    - sanitize-html
    - ejs
    - express-validator
    - dotenv
    - mongoose

How To Install Dependencies:
    - npm install express
    - npm install sanitize-html
    - npm install ejs
    - npm install express-validator
    - npm install dotenv
    - npm install mongoose

> [!IMPORTANT]
> Instructions to run server with URLs to test routes:
> 1. Create clone of HW1 repository from GitHub
> 2. Initialize node.js with _npm init_
> 3. Install dependencies in node_modules folder with _npm install_
> 4. Install Express with _npm install express_
> 5. Install sanitize html with _npm install sanitize-html_
> 6. Install ejs with _npm install ejs_
> 7. Install ejs with _npm install express-validator_
> 8. Install dotenv with _npm install dotenv_
> 9. Install mongoose with _npm install mongoose_
> 10. To run the server and test it type _run node server.js_ or _npm start_
> 11. Open your browser and type _http://localhost:3000_ into the URL to get to the root route
> 12. Click _View Entire Shopping List_ to be taken to the shopping list
> 13. Once done viewing any of the pages you can click the heart to go back to the homepage
> 14. To view a single item in the URL type _http://localhost:300/singleItem/theIDYouWantToSearch_
> - ID's available: 1, 2, 3, 4, 5, 6, and 7
> 15. To view GitHub Repository click _GitHub Repository for this application_ to be taken to this GitHub Repository for this application
> 16. Click _Add Shopping List Item_ to view the form to add a list item
   > - If no errors are found you will be redirected to the entire shopping list page
   > - If errors are found you will view an errors page that will show  _Please Try Again_ link that will take you back to the form with the errors
> 17. Click _Delete Shopping List Item_ to view the form to add a list item
   > - If no errors are found you will be redirected to the entire shopping list page
   > - If errors are found you will view an errors page that will show  _Please Try Again_ link that will take you back to the form with the errors

> [!NOTE]
> The fields that have specific validation requirements:
   > 1. Item Name is required
   > 2. One of the categories must be selected
   > 3. Description is required

> [!IMPORTANT]
> example of adding an item that will work:
   > - for Item Name type _wet dog food_
   > - for Category select _Canine_
   > - for Description type _12oz Beef wet dog food_
   > - for Coupon select _no_
   > - Click the _Submit_ button

> [!IMPORTANT]
> example that will allow users to test the error page:
   > - for Item Name type _wet dog food_
   > - for Category select _Canine_
   > - for Description leave empty
   > - for Coupon select _no_
   > - Click the _Submit_ button
   > - Click _Please Try Again_ link to be taken back to the form to fix the errors

   > [!IMPORTANT]
> to connect to mongodb atlas to access collection:
   > - create .env file to store the MONGO_URI from your database changing the username and password. Also add the collections name
   > - MONGO SCHEMA USED:
   >  - itemName:  
      >   {type: String,
      >    required: true
      >   },
   >   section:   
   >     {type: String, 
            >   enum: ["canine", "feline", "rodent"],
            >   required: true
   >     },
   >   desc:     
      >   {type: String},
   >   coupon:    
      >   {type: Boolean,
      >      default: false
      >   }
    
