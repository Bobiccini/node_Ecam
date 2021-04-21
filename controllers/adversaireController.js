let adversaireModel = require ('../models/adversaireModel.js');

let connection = require ('../db.js');

//liste des adversaires
exports.composition = function (req,res) {
    connection.query("select * from adversaire;", function(error, resultSQL) {
        if (error) {console.log(error);
        }
        else {
            feuille_de_match = resultSQL
            console.log(feuille_de_match);
            res.render('popUp.ejs',{adversaires:feuille_de_match});
        }       
    });
}
 