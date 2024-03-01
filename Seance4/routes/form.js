const path = require('path');
const express = require('express');
const router = express.Router();

const message = [];

// Récupère en post via url ou lien
router.get('/form', (req, res, next) => {
    res.render(path.join(__dirname,"..","views","form.ejs"), {pageTitle: "formulaire message"});

});

// Récupère en post de la validation du formulaire
router.post('/form', (req, res, next) => {
    console.log(Object.assign({},req.body));
    const aa = Object.assign({},req.body);
    message.push({ message: req.body.message });
    res.redirect('/');
});

exports.routes = router;
exports.message = message;
