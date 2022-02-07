Server-side-Development-with-NodeJS-Express-and-MongoDB
Server-side Development with NodeJS, Express and MongoDB

WEEK 1
Introduction to Server-side Development
In this module you will be introduced to Node, Node modules and the Node HTTP server. You will learn about the Express framework and how to set up a REST API using Express.

WEEK 2
Data, Data, Where art Thou Data?
This module looks in detail at data storage with MongoDB, the popular NoSQL database. You will learn first about Express generator for scaffolding an Express application. Then you will learn about MongoDB. You will learn how to interact with MongoDB from a Node application. Then you will learn the Mongoose ODM to create schemas and models, and interact with MongoDB server.

WEEK 3
Halt! Who goes there?
This module is dedicated to user authentication. We first develop a full-fledged REST API server with Express, Mongo and Mongoose. Thereafter we examine basic authentication and session-based authentication briefly. We then develop token-based authentication with the support of JSON web tokens and the Passport module.

Week 4
Backend as a Service (BaaS)
In this module we learn about Mongoose population, a way of cross-referencing documents and populating the documents from other documents. We then review secure communication using HTTPS. We look at Backend as a Service (BaaS) and take a brief look at Loopback.

Dependencies
ASSIGNMENT-1: npm i morgan express body-parser
ASSIGNMENT-2: npm i bluebird body-parser cookie-parser debug express pug mongoose mongoose-currency morgan serve-favicon
ASSIGNMENT-3:npm i bluebird body-parser cookie-parser debug express express-session pug jsonwebtoken mongoose mongoose-currency morgan passport passport-jwt passport-local passport-local-mongoose serve-favicon session-file-store
ASSIGNMENT 4:npm i bluebird body-parser cookie-parser cors debug express express-session pug jsonwebtoken mongoose mongoose-currency morgan multer passport passport-facebook-token passport-jwt passport-local passport-local-mongoose serve-favicon session-file-store
NOTE:
For ASSIGNMENT 4...setup an App by going to https://developers.facebook.com/apps/ and register your app by following the instructions there and obtain your App ID and App Secret. Then Paste the App ID in public/index.html and both the ID and Secret in config.js.Also for certificate.pem & private.key https://helpcenter.gsx.com/hc/en-us/articles/115015960428-How-to-Generate-a-Self-Signed-Certificate-and-Private-Key-using-OpenSSL .Generate the keys and paste it in bin folder.
