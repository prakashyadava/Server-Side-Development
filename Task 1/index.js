const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./Routers/dishRouter');
const leaderRouter = require('./Routers/leaderRouter');
const promoRouter = require('./Routers/promoRouter');
const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(dishRouter);
app.use(leaderRouter);
app.use(promoRouter)
app.use((req, res, next) => {
console.log(req.headers);
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});