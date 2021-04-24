let express = require('express');

let app = express();

const format = require('date-format');

var mysql = require("mysql");

let connection = require('./db.js');

const bodyParser = require('body-parser');


//linking a CSS file
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use((req, res, next)=>{
    res.locals.format = format;
    next();
  });

let router = require('./routes');
app.use(bodyParser.json({limit:"1.1MB"}));
app.use ('/',router);

    
app.listen(5000, function (){
    console.log('running on port 5000');
})