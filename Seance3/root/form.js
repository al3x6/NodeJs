//////////////////////////////////////////////////// Version import du html
const express = require('express');
const router = express.Router();
const path = require('path');
/** const message = []*/

router.get('/form', (req, res, next) => {
    console.log("middleware form get");
    res.sendFile(path.join(__dirname, '../', 'Vue', 'Formulaire.html'));
});

router.post('/resultat', (req, res, next) => {
    console.log("middleware form post");
    console.log(req.body);

    /**
    console.log(Object.assign({},req.body));
    message.push(Object.assign({},req.body));
    //message = message.push({ message: req.body.message });
     */
    res.redirect('/');
    //res.sendFile(path.join(__dirname,'../','Vue','Formulaire.html'));

});

module.exports = router;
/**
 exports.routes = router;
 exports.message = message;
 */