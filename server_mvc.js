let express = require('express');

let app = express();

var mysql = require("mysql");

let connection = require('./db.js');


//linking a CSS file
//app.use(express.static('public'));

//app.use(express.urlencoded({extended:true}));

let router = require('./routes');
app.use ('/',router);
    


app.listen(5000, function (){
    console.log('running on port 5000');
})