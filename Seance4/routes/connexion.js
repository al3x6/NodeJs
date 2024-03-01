const path = require('path');
const express = require('express');
const router = express.Router();

const accessMessage = require('./login');

router.get('/utilisateur', (req, res, next) => {
    console.log("access message : ", accessMessage.login);

    // récupère le message (message) du formulaire envoyé par form.js
    if (accessMessage.login) {
        const lelogin = accessMessage.login;

        if (lelogin.length > 0) {
            let value;
            for (const elt of lelogin) {
                value = elt.message;
                console.log("value : ", elt.message);
            }
        }

        res.render(path.join(__dirname, "..", "views", "utilisateur.ejs"), {
            login: lelogin,
            pageTitle: "Utilisateur"
        }); // Redirection et affiche le message recu du formulaire sur la page
    }
});

router.get('/gestionnaire', (req, res, next) => {
    console.log("access message : ", accessMessage.login);

    // récupère le message (message) du formulaire envoyé par form.js
    if (accessMessage.login) {
        const lelogin = accessMessage.login;

        if (lelogin.length > 0) {
            let value;
            for (const elt of lelogin) {
                value = elt.message;
                console.log("value : ", elt.message);
            }
        }

        res.render(path.join(__dirname, "..", "views", "gestionnaire.ejs"), {
            login: lelogin,
            pageTitle: "Gestionnaire"
        }); // Redirection et affiche le message recu du formulaire sur la page
    }
});

module.exports = router;
