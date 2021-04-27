let compositionModel = require ('../models/compositionModel.js');

let liste_des_compositions = [];

let connection = require ('../db.js');

let match_infos = []


exports.liste_des_compositions = function (req,res) {
    connection.query("SELECT m.date, a.nom FROM `match` AS m, adversaire AS a WHERE m.id_adversaire = a.id_adversaire", function(error, resultSQL) {
        if (error) {console.log(error);
            res.status(400).json({'error': error});
        }
        else {
            res.status(200).json(resultSQL);
        }    
    });
}

exports.liste_des_compositions_search = function (req,res) {
    connection.query("SELECT m.date, a.nom FROM `match` AS m, adversaire AS a WHERE m.id_adversaire = a.id_adversaire and a.nom like ?", ["%"+req.body.search +"%"],function(error, resultSQL) {
        if (error) {console.log(error);
            res.status(400).json({'error': error});
        }
        else {
            console.log(resultSQL);
            res.status(200).json(resultSQL);
        }    
    });
}

exports.nouvelles_compositions = function (req,res) {
    connection.query("select * from adversaire;", function(error, resultSQL) {
        if (error) {console.log(error);
            res.status(400).json({'error': error});
        }
        else {
            res.status(200).json(resultSQL); {
                if (error) {console.log(error);
                    res.status(400).json({'error': error});
                }
                else {
                    res.status(200).json(resultSQL);
                }
            }       
        }
    }); 
}

exports.new_compo = function (req,res) {
    let date = (req.body.date)
    connection.query("insert into `match` (date, id_adversaire) values (?,?)",[date,req.body.adversaire], function (error, result_match){
        if (error) {console.log(error);
            res.status(400).json({'error': error});
        }
        else {
            res.status(200).json({"message":"success"});
        }
    });

}