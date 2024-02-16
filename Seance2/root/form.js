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
const express= require('express');
const router = express.Router();
const path= require('path');

router.get('/form', (req, res, next) => {
    console.log("middleware form");
    res.sendFile(path.join(__dirname,'..','Vue','Formulaire.html'));
});

router.post('/resultat', (req, res, next) => {
    console.log("middleware form post");
    console.log(req.body);
    res.redirect('/');
    //res.sendFile(path.join(__dirname,'../','Vue','Formulaire.html'));

});

module.exports=router;