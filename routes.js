let express = require('express');
let router = express.Router();
let compoController = require('./controllers/compoController');
let playerController = require('./controllers/playerController');

//Liste des routes vers les controlleurs
router.get('/', (req, res) => res.redirect('/compo'));

router.get('/compo', compoController.playerList);
router.post('/compo/new', compoController.playerNew);
router.get('/compo/add', compoController.compoFormAdd);
router.get('/compo/delete/:id', compoController.delete);
router.get('/player/delete/:id', playerController.delete);

router.get('/player/update/:id', playerController.updateView);
router.post('/player/update/:id', playerController.update);


module.exports = router;