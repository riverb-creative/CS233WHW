# CS 233W - Homework 02
## Author: River
### Date: 10/15/2025

**Description:** CS 233W Homework 02 - Creating a shopping list application using the express.js web framework, creating seperate routes with express.Router(), and using route parameters, query strings, and route.post()

Dependencies: 
    - express.js

How To Install Dependencies:
    - npm install express

[!IMPORTANT]

Instructions to run server with URLs to test routes:
1. Create clone of HW1 repository from GitHub
2. Initialize node.js with _npm init_
3. Install Express with _npm install express_
4. To run the server and test it type _run node server.js_ or _npm start_
5. Open your browser and type _http://localhost:3000_ into the URL to get to the root route
6. To get to the access JSON array of lists.js types _http://localhost:3000/lists_ into the URL to get to view the array
7. To check if an (number) ID exists type _http://localhost:3000/lists/_ and add _theIDNumberYouWantToCheck_ into the URL after _lists/_ to get to view the array
8. To search for a section and get a list of items available type _http://localhost:3000/lists/search/mysearch_ into the URL and add _?section=theSectionYouWantToSearch_ after _mysearch_ to get to view the array
9. To check if you can add an item via the POST method open http://localhost:3000/lists right click and click Inspect. Navigate to the console section of the inspect tool and copy and paste a working POST request:
    fetch('http://localhost:3000/list', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
        listItem: 'tomato soup',
        section: 'canned goods',
        coupon: true
     })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
10. To check a non-working POST request copy and paste in the console:
    fetch('http://localhost:3000/list', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            listItem: 'shampoo',
            coupon: true
    })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));