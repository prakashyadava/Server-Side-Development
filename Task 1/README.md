In this assignment we will continue the exploration of Node modules, Express and the REST API. we will design two new express routers to support REST API end points for promotions and leadership.

Step-By-Step Assignment Instructions less Assignment Overview

At the end of this assignment, we should have completed the following tasks to update the server:

Created a Node module using Express router to support the routes for the dishes REST API.

Created a Node module using Express router to support the routes for the promotions REST API.

Created a Node module using Express router to support the routes for the leaders REST API.

Assignment Requirements

The REST API for our Angular and Ionic/Cordova application that we built in the previous courses requires us to support the following REST API end points:

http://localhost:3000/dishes/:dishId

http://localhost:3000/promotions and http://localhost:3000/promotions/:promoId

http://localhost:3000/leaders and http://localhost:3000/leaders/:leaderId

We need to support GET, PUT, POST and DELETE operations on each of the endpoints mentioned above, including supporting the use of route parameters to identify a specific promotion and leader. We have already constructed the REST API for the dishes route in the previous exercise.

This assignment requires we to complete the following three tasks. Detailed instructions for each task are given below.

Task 1

In this task we will create a separate Node module implementing an Express router to support the REST API for the dishes. we can reuse all the code that we implemented in the previous exercise. To do this, we need to complete the following:

Update the Node module named dishRouter.js to implements the Express router for the /dishes/:dishId REST API end point.

Task 2

In this task we will create a separate Node module implementing an Express router to support the REST API for the promotions. To do this, we need to complete the following:

Create a Node module named promoRouter.js that implements the Express router for the /promotions and /promotions/:promoId REST API end points.

Require the Node module we create above within our Express application and mount it on the /promotions route.

Task 3

In this task we will create a separate Node module implementing an Express router to support the REST API for the leaders. To do this, we need to complete the following:

Create a Node module named leaderRouter.js that implements the Express router for the /leaders and /leaders/:leaderId REST API end points.

Require the Node module we create above within our Express application and mount it on the /leaders route.

Review criteria less Upon completion of the assignment, our submission will be reviewed based on the following criteria:

Task 1:

The REST API supports GET, PUT, POST and DELETE operations on /dishes/:dishId end point.

Task 2:

The new Node module, promoRouter is implemented and used within our server to support the /promotions end point.

The REST API supports GET, PUT, POST and DELETE operations on /promotions and GET, PUT, POST and DELETE operations on /promotions/:promoId end points.

Task 3:

The new Node module, leaderRouter is implemented and used within our server to support the /leaders end point.

The REST API supports GET, PUT, POST and DELETE operations on /leadership and GET, PUT, POST and DELETE operations on /leaders/:leaderId end points.