let joueurModel = require ('../models/joueurModel.js');

let liste_des_joueurs= [];

let connection = require ('../db.js');

exports.liste_joueurs = function (req,res) {
    connection.query("select * from joueur;", function(error, resultSQL) {
        if (error) {console.log(error);
        }
        else {
            liste_des_joueurs = resultSQL
            console.log(liste_des_joueurs);
            res.render('playerList.ejs',{joueurs:liste_des_joueurs});
        }       
    });
}

exports.delete = function (req,res) {
    connection.query("delete from joueur where id_joueur = ?;", [req.params.id], function(error, result) {
        if (error) {console.log(error);
        }
        else {
            res.redirect('/liste_des_joueurs');
        }       
    });
}

exports.update = function (nom, prenom, id_joueur) {
    connection.query("update prenom = ? ,nom = ? from joueur where id_joueur = ?;", [nom, prenom, id_joueur], 
    function (error, result) {
        if (error) {console.log(error);
        }
        else {
            res.redirect('/liste_des_joueurs');
        }       
    });
}

/*module.exports = {
    delete:function(deleteId) {
    Mysql.query('delete from joueur where id_joueur = ?',[deleteId])
    },

    update:function(nom, prenom, updateId) {
    Mysql.query('update joueur set nom =?, prenom =? where id_joueur = ?',[nom, prenom, updateId])
    }
};*/


/*exports.update = function(req,res) {
    if (req.body.prenom ==='') {return;}
    if (req.body.nom ==='') {return;}
    joueurModel.update(req.body.prenom,req.body.nom,req.params.id);
    res.redirect('/liste_des_joueurs')
}*/

/*
exports.updateView = function (req, res){
        res.render('updatePlayer.ejs',{players:playerView,id:req.params.id});
}



exports.playerNew = function (req,res) {
    let player = req.body.player;
    let compo = new Compo(player);
    playerView.push(compo);
    res.redirect('/compo');
}*/