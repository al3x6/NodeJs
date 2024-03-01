const path = require('path');
const express = require('express');
const router = express.Router();

const accessMessage = require('./form');

router.get('/', (req, res, next) => {
    console.log("acces message : ", accessMessage.message);
    if (accessMessage.message) {
        const lemessage = accessMessage.message;
        if (lemessage.length > 0) {
            let value;
            for (const elt of lemessage) {
                value = elt.message;
                console.log("value : ", elt.message);
            }
        }
        res.render(path.join(__dirname,"..","views","accueil.ejs"), {message: lemessage, pageTitle: "Accueil"});
    }
});

module.exports = router;
//<%- include('layout/debut.ejs')%>
// <%- include('layout/navigation.ejs')%>
// <%- include('layout/fin.ejs') %>