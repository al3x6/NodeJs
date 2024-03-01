const path = require('path');
const express = require('express');
const router = express.Router();

const accessMessage = require('./form');

router.get('/', (req, res, next) => {
    console.log("acces message : ", accessMessage.message);

    // récupère le message (message) du formulaire envoyé par form.js
    if (accessMessage.message) {
        const lemessage = accessMessage.message;

        if (lemessage.length > 0) {
            let value;
            for (const elt of lemessage) {
                value = elt.message;
                console.log("value : ", elt.message);
            }
        }
        res.render(path.join(__dirname, "..", "views", "accueil.ejs"), {message: lemessage, pageTitle: "Accueil"}); // Redirection et affiche le message recu du formulaire sur la page
    }
});

module.exports = router;