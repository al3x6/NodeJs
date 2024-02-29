    // Importation module
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 5000;
const path = require('path');

const defaut = require("./root/default");
const form = require("./root/form");

    // PARTIE APP
app.listen(port);
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));   // Import css

app.use(defaut);    // Utilisation du controleur defaut
app.use(form);       // Utilisation du controleur form
/**
app.use(form.routes);
*/

// Pour pug
app.set('Vue engine', 'pug');
app.set('Vue', path.join(__dirname, 'Vue'));

app.use((req, res, next) => {
    //res.status(404).send("<html><head><title>erreur 404</title></head><body><h1>Not found : 404</h1></body></html>");
    //res.status(404).sendFile(path.join(__dirname,'./','Vue','page404.html'));
    res.status(404).render("page404");
})     // Erreur 404
//pug permet d'ajouter des messages dans la page web static

console.log("Serveur démarré sur le port :" + port);