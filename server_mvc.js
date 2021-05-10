let express = require('express');

let app = express();

const format = require('date-format');

var mysql = require("mysql");

let connection = require('./db.js');

const bodyParser = require('body-parser');


//linking a CSS file
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use((req, res, next)=>{
    res.locals.format = format;
    next();
  });

  app.all('/*', function(req, res, next) {

    // CORS headers

    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain

    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');

    if (req.method == 'OPTIONS') {

      res.status(200).end();

    } else { next(); }

 });

let router = require('./routes');
app.use ('/',router);

    
app.listen(5000, function (){
    console.log('running on port 5000');
})