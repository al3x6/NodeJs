const path = require('path');
const express = require('express');
const router = express.Router();

const message = []; // Variable pour récupérer le message du formulaire

// Récupère en post via url ou lien
router.get('/form', (req, res, next) => {
    res.render(path.join(__dirname, "..", "views", "form.ejs"), {pageTitle: "formulaire message"});

});

// Récupère en post de la validation du formulaire
router.post('/form', (req, res, next) => {
    console.log(Object.assign({}, req.body)); // Affiche dans la console le message
    const aa = Object.assign({}, req.body);
    message.push({message: req.body.message}); // envoie le message vers la redirection (defaut.js)
    res.redirect('/');
});

exports.routes = router;
exports.message = message;
