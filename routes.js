let express = require('express');
let router = express.Router();
let compositionController = require('./controllers/compositionController');
let joueurController = require('./controllers/joueurController');
let adversaireController = require ('./controllers/adversaireController');

//Liste des routes vers les controlleurs

router.get('/', (req,res) => res.render('homePage.ejs'));
router.post('/', (req,res) => res.render('homePage.ejs'));
router.get('/liste_des_joueurs', joueurController.liste_joueurs);
router.get('/nouvelle_composition', compositionController.liste_des_compositions);

router.post('/feuille_de_match', (req,res) => res.render('newCompo.ejs'));
router.get ('/feuille_de_match', compositionController.liste_joueurs);

router.get('/nouvelle_composition', adversaireController.composition);

router.get('/liste_des_joueurs/supprimer/:id', joueurController.delete);

router.get('/liste_des_joueurs/modifier/:id', (req,res) => res.render('modifier.ejs'));

router.post('/sauvegarder_les_modifications/:id', joueurController.update);
router.get ('/sauvegarder_les_modifications', (req,res) => res.redirect('/liste_des_joueurs'));




/*router.post('/compo/new', compositionController.playerNew);
router.get('/compo/add', compositionController.compoFormAdd);

router.get('/compo/delete/:id', compositionController.delete);
router.get('/compo/update/:id', compositionController.update);

router.get('/compo/new',compositionController.composition);


router.post('/player/update/:id', joueurController.update); */


module.exports = router;