/////////////////////////////////////////////// Formulaire avec express et MiddleWare dans des 3 nouveaux fichier
/*const express= require('express');
const router = express.Router();

router.get('/form', (req, res, next) => {
    console.log("middleware form");
    res.send("<html lang='fr'><head><title>page form</title></head><body><h1>page form</h1></body>");
});

router.post('/resultat', (req, res, next) => {
    console.log("middleware resultat");
    res.send("<html lang='fr'><head><title>page resultat</title></head><body><h1>page Resultat</h1></body>");
});

module.exports=router;*/

//////////////////////////////////////////////////// Version import du html
    // Importation
const express= require('express');
const router = express.Router();
const path= require('path');

// Lorsque je clique sur un lien via un bouton ou j'entre une url => get
router.get('/form', (req, res, next) => {
    console.log("middleware form get");
    res.sendFile(path.join(__dirname,'../','Vue','Formulaire.html'));
});

// Lorsque je valide un formulaire en post
router.post('/resultat', (req, res, next) => {
    console.log("middleware form post");
    console.log(req.body);    // Affiche la donnée entrée dans le formulaire
    res.redirect('/');    // Redirection à l'accueil
    //res.sendFile(path.join(__dirname,'../','Vue','Formulaire.html'));

});

module.exports=router;