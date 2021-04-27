let compositionModel = require ('../models/compositionModel.js');

let liste_des_compositions = [];

let connection = require ('../db.js');

let match_infos = []


exports.liste_des_compositions = function (req,res) {
    connection.query("SELECT m.date, a.nom FROM `match` AS m, adversaire AS a WHERE m.id_adversaire = a.id_adversaire", function(error, resultSQL) {
        if (error) {
            console.log(error)
            } 
        else {
            match_infos = resultSQL
            res.render('homepage.ejs',{matchs:match_infos});
        }       
    });
}

exports.nouvelles_compositions = function (req,res) {
    connection.query("select * from adversaire;", function(error, resultSQL) {
    if (error) {console.log(error);
    }
    else {
        liste_des_adversaires = resultSQL
        connection.query("select * from joueur;", function(error, resultSQL) {
            if (error) {console.log(error);
            }
            else { 
                nouvelle_composition = resultSQL
                res.render('newCompo.ejs',{joueurs:nouvelle_composition,adversaires:liste_des_adversaires});
            }       
        });
    }       
});
    
}

exports.new_compo = function (req,res) {
    console.log(req.body.adversaire)
    let date = (req.body.date)
    console.log(date)
    connection.query("insert into `match` (date, id_adversaire) values (?,?)",[date,req.body.adversaire], function (error, result_match){
        if (error) {console.log(error);
        }
        else {
            console.log (result_match);
            let nombre_joueur = 15
            while (nombre_joueur -- ) {
                connection.query("insert into composition (id_match, id_joueur) values (?,?)", function (error,result){
                    if (error) {console.log(error);
                    }
                });
            }
            res.redirect ('/')
        }
    })

}