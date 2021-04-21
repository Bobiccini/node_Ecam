let compositionModel = require ('../models/compositionModel.js');

let liste_des_compositions = [];

let connection = require ('../db.js');

exports.liste_des_compositions = function (req,res) {
    res.render('popUp.ejs',{composition:liste_des_compositions});


exports.liste_joueurs = function (req,res) {
    connection.query("select * from joueur;", function(error, resultSQL) {
        if (error) {console.log(error);
        }
        else { 
            liste_des_joueurs = resultSQL
            console.log(liste_des_joueurs);
            res.render('newCompo.ejs',{joueurs:liste_des_joueurs});
        }       
    });
}

/*function fetchjoueur() {
    return new Promise((resolve, reject) => {
        connection.query("select * from joueur;", function(error, result) {
        if (error) {
            reject(error)
        } else {
            resolve(result)
                }
        });
});

exports.compoFormAdd = function (req,res) {
    res.render('newCompo.ejs',{player:""
});
}

exports.delete = function (req,res){
    playerList.splice(req.params.key,1);
    res.redirect('/');
}

exports.update = function(req,res){
    playerList.update(req.params.key,1);
    res.render('playerList.ejs',{compos:playerList
});
}

exports.playerNew = function (req,res) {
    let player = req.body.player;
    let compo = new Compo(player);
    playerList.push(compo);
    res.redirect('/compo');
}

*/}