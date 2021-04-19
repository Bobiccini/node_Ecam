let express = require('express');

let app = express();

var mysql = require("mysql");
const { connect } = require('./routes');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'Rugby_app',
});

//linking a CSS file
app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));

let router = require('./routes');
app.use ('/',router);

//list des players
app.get('/list',(req,res)=> {
    connection.query("select * from joueur;", function(error, result) {
        if (error) console.error;
        console.log (result);
        res.render("newCompo.ejs",{joueurs:result});
    });
});   

app.get('/players',(req,res)=> {
    connection.query("select * from joueur;", function(error, result) {
        if (error) console.error; 
        res.render("playerList.ejs",{joueurs:result})
    });
});


app.post('/createNewTeam',(req,res)=> {
    console.log(req.body)
});
    
connection.connect(function(error) {if (error) console.log(error);});


app.listen(5000, function (){
    console.log('running on port 5000');
})