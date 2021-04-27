let express = require('express');
let router = express.Router();
let compositionController = require('./controllers/compositionController');
let compositionController_API = require('./controllers/compositionController_API');
let joueurController = require('./controllers/joueurController');
let joueurController_API = require('./controllers/joueurController_API');

//Liste des routes vers les controlleurs
 
router.post('/', (req,res) => res.render('homePage.ejs'));
router.get('/liste_des_joueurs', joueurController.liste_joueurs);

router.get('/nouvelle_composition', compositionController.nouvelles_compositions);

router.get('/',compositionController.liste_des_compositions);
router.post('/newCompo', compositionController.new_compo);

router.get('/liste_des_joueurs/supprimer/:id', joueurController.delete);
router.get('/liste_des_joueurs/modifier/:id', (req,res) => res.render('modifier.ejs',{id_joueur:req.params.id}));

router.post('/sauvegarder_les_modifications/:id', joueurController.update);
router.get ('/sauvegarder_les_modifications', (req,res) => res.redirect('/liste_des_joueurs'));

/********* API ********/

router.post('/api', (req,res) => res.render('homePage.ejs'));
router.get('/liste_des_joueurs', joueurController_API.liste_joueurs);

router.get('/api/nouvelle_composition', compositionController_API.nouvelles_compositions);

router.get('/api/',compositionController_API.liste_des_compositions);
router.post('/api/newCompo', compositionController_API.new_compo);

router.get('/api/liste_des_joueurs/supprimer/:id', joueurController_API.delete);
router.get('/api/liste_des_joueurs/modifier/:id', (req,res) => res.render('modifier.ejs',{id_joueur:req.params.id}));

router.post('/api/sauvegarder_les_modifications/:id', joueurController_API.update);
router.get ('/api/sauvegarder_les_modifications', (req,res) => res.redirect('/liste_des_joueurs'));


module.exports = router;
