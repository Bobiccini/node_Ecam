let express = require('express');
let router = express.Router();
let compoController = require('./controllers/compoController');

//Liste des routes vers les controlleurs
router.get('/', (req, res) => res.redirect('/compo'));

router.get('/compo', compoController.playerList);
router.post('/compo/new', compoController.playerNew);
router.get('/compo/add', compoController.compoFormAdd);
router.get('/compo/delete/:id', compoController.delete);

module.exports = router;