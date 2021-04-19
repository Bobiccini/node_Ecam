let playerModel = require ('../models/modelPlayer.js');

let playerView = [];

exports.playerView = function (req,res) {
    res.render('newCompo.ejs',{compos:playerView});
}

exports.delete = function (req,res){
        playerModel.delete(req.params.id);
        res.redirect('/list');
}

exports.updateView = function (req, res){
        res.render('updatePlayer.ejs',{players:playerView,id:req.params.id});
}

exports.update = function(req,res){
    if (req.body.nom ==='') {return;}
    if (req.body.prenom ==='') {return;}
    playerModel.update(req.body.nom,req.body.prenom,req.params.id);
    res.redirect('/list')
}

exports.playerNew = function (req,res) {
    let player = req.body.player;
    let compo = new Compo(player);
    playerView.push(compo);
    res.redirect('/compo');
}