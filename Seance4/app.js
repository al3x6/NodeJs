// extraction de module
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port=8000;
const app = express();

const defautRoutes = require('./routes/defaut');
const formRoutes = require('./routes/form');

    // PARTIE APP
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));

app.use(formRoutes.routes);
app.use(defautRoutes);

app.use((req,res,next)=>{
    res.status(404).render(path.join(__dirname,"views","404.ejs"), {pageTitle: "404 not Found"});
});

app.listen(port);

console.log("serveur http à l'écoute sur le port : "+port); // Ecouter sur le port