const path = require('path');
const express = require('express');
const router = express.Router();

const login = [];     // Variable pour récupérer le message du formulaire

// Récupère en post via url ou lien
router.get('/login', (req, res, next) => {
    res.render(path.join(__dirname, "..", "views", "login.ejs"), {pageTitle: "formulaire login"});
});

// Récupère en post de la validation du formulaire
router.post('/login', (req, res, next) => {
    console.log(Object.assign({}, req.body)); // Affiche dans la console le message
    const aa = Object.assign({}, req.body);

    //const param1 = req.body.login;
    const param2 = req.body.mdp
    console.log("login = " + req.body.login + " mdp =" + param2)

    if(req.body.login=='gestion') {

        req.session.isLogin = true;
        login.push({login: req.body.login});

        res.setHeader('Set-Cookie', 'login' + req.body.login);    // mettre un cookie
        res.redirect('/gestionnaire');

    }
    else
    {
        req.session.isLogin = true;
        login.push({login: req.body.login});

        res.setHeader('Set-Cookie', 'login' + req.body.login);    // mettre un cookie
        res.redirect('/utilisateur');
    }
});

// export routes
exports.routes = router;
exports.login = login;
