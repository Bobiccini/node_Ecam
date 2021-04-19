var Mysql = require('../DB.js')

module.exports = {
    delete:function(deleteId) {
    Mysql.query('delete from joueur where id_joueur = ?',[deleteId])
    },

    update:function(nom, prenom, updateId) {
    Mysql.query('update joueur set nom =?, prenom =? where id_joueur = ?',[nom, prenom, updateId])
    }
};