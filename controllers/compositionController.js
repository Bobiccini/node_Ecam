let compositionModel = require ('../models/compositionModel.js');

let liste_des_compositions = [];

let connection = require ('../db.js');


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
                console.log(nouvelle_composition);
                res.render('newCompo.ejs',{joueurs:nouvelle_composition,adversaires:liste_des_adversaires});
            }       
        });
    }       
});
    
}

exports.new_compo = function (req,res) {
    console.log(req.body.adversaire)
    connection.query("insert into match (id_adversaire) values (?)", req.body.adversaire, function (error, result_match){
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

*/