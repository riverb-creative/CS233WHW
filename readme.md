# CS 233W - Homework 03
## Author: River
### Date: 10/24/2025

**Description:** CS 233W Homework 03 - Creating a shopping list application using the express. Creating middleware and importing sanitize-html to discard script tags

Dependencies: 
    - express.js
    - sanitize-html

How To Install Dependencies:
    - npm install express
    - npm install sanitize-html

[!IMPORTANT]

Instructions to run server with URLs to test routes:
1. Create clone of HW1 repository from GitHub

2. Initialize node.js with _npm init_

3. Install Express with _npm install express_

4. 3. Install Express with _npm install sanitize-html_

5. To run the server and test it type _run node server.js_ or _npm start_

6. Open your browser and type _http://localhost:3000_ into the URL to get to the root route

7. To check if you can add an item with a `<script>` tag via the POST method open http://localhost:3000/lists right click and click Inspect. Navigate to the console section of the inspect tool and copy and paste a working POST request:

    fetch('http://localhost:3000/lists/add/item', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
        listItem: 'tomato soup', <-- add the script tag here the text 'test' should be the only text to show (eg. '`<script>`tomato soup`</script>`'test')
        section: 'canned goods', <-- add the script tag here (eg. '`<script>`tomato soup`</script>`'test`)
     })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

Middleware Order:
1. logger.js - it is listed 1st in the middleware folder so it will execute before sanitize.js
2. sanitize.js - once logger.js is finished it will continue into sanitize.js