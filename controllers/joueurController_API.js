 let joueurModel = require ('../models/joueurModel.js');

let liste_des_joueurs= [];

let connection = require ('../db.js');

exports.liste_joueurs = function (req,res) {
    connection.query("select * from joueur;", function(error, resultSQL) {
        if (error) {console.log(error);
            res.status(400).json({'error': error});
        }
        else {
            res.status(200).json(resultSQL);
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

exports.update = function (req,res) {
    console.log(req)
    connection.query("update joueur set prenom = ? ,nom = ? where id_joueur = ?;", [req.body.nom, req.body.prenom, req.params.id], 
    function (error, result) {
        if (error) {console.log(error);
        }
        else {
            res.redirect('/liste_des_joueurs');q
        }       
    });
}
