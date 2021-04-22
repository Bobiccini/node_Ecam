let adversaireModel = require ('../models/adversaireModel.js');

let connection = require ('../db.js');

let liste_des_adversaires = []

/*//liste des adversaires
exports.composition = function (req,res) {
    console.log("coucou")
    connection.query("select * from adversaire;", function(error, resultSQL) {
        if (error) {console.log(error);
        }
        else {
            liste_des_adversaires = resultSQL
            console.log(liste_des_adversaires);
            res.render('popUp.ejs',{adversaires:liste_des_adversaires});
        }       
    });
}*/
 