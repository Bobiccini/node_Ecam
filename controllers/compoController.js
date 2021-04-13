let Compo = require ('../models/model.js');

let playerList = [];

exports.playerList = function (req,res) {
    res.render('homePage.ejs',{compos:playerList});
}

exports.compoFormAdd = function (req,res) {
    res.render('newCompo.ejs',{player:""
});
}

exports.delete = function (req,res){
        playerList.splice(req.params.key,1);
        res.redirect('/');
}

exports.playerNew = function (req,res) {
    let player = req.body.player;
    let compo = new Compo(player);
    playerList.push(compo);
    res.redirect('/compo');
}