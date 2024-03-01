const path = require('path');
const express = require('express');
const router = express.Router();

const parametre = [];     // Variable pour récupérer le message du formulaire

// Récupère en post via url ou lien
router.get('/login', (req, res, next) => {
    res.render(path.join(__dirname, "..", "views", "login.ejs"), {pageTitle: "formulaire login"});
});

// Récupère en post de la validation du formulaire
router.post('/login', (req, res, next) => {
    console.log(Object.assign({}, req.body)); // Affiche dans la console le message
    const aa = Object.assign({}, req.body);
    parametre.push({message: req.body.parametre});
    res.setHeader('Set-Cookie', 'login' + req.body.login);    // mettre un cookie
    res.redirect('/');
});

// export routes
exports.routes = router;
exports.parametre = parametre;
