// Create web server
// Path: server.js
// const http = require('http');
// const server = http.createServer(function(req, res) {
//     res.write('Hello World');
//     res.end();
// });
// server.listen(3000);
// console.log('Server started on port 3000');
// Create web server using express
// Path: server.js
// const express = require('express');
// const app = express();
// app.get('/', function(req, res) {
//     res.send('Hello World');
// });
// app.listen(3000);
// console.log('Server started on port 3000');
// Create web server using express and ejs
// Path: server.js
// const express = require('express');
// const path = require('path');
// const app = express();
// app.get('/', function(req, res) {
//     res.send('Hello World');
// });
// app.listen(3000);
// console.log('Server started on port 3000');
// Path: package.json
// {
//     "name": "nodeapp",
//     "version": "1.0.0",
//     "description": "",
//     "main": "server.js",
//     "scripts": {
//         "test": "echo \"Error: no test specified\" && exit 1",
//         "start": "node server.js"
//     },
//     "keywords": [],
//     "author": "",
//     "license": "ISC",
//     "dependencies": {
//         "ejs": "^2.6.1",
//         "express": "^4.16.4"
//     }
// }
// Path: views/index.ejs
// <!DOCTYPE html>
// <html>
//     <head>
//         <meta charset="utf-8">
//         <title>Node App</title>
//     </head>
//     <body>
//         <h1><%= title %></h1>
//     </body>
// </html>
// Path: server.js
// const express = require('express');
// const path = require('path');
// const app = express();
// app.set('view engine', 'ejs');
// app.get('/', function(req, res) {
//     let title = 'Our Home Page';
//     res.render('index', {
//         title: title
//     });
// });
// app.listen(3000);
// console.log('Server started on