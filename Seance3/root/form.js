//////////////////////////////////////////////////// Version import du html
const express= require('express');
const router = express.Router();
const path= require('path');

router.get('/form', (req, res, next) => {
    console.log("middleware form");
    res.sendFile(path.join(__dirname,'..','Vue','Formulaire.html'));
});

router.post('/resultat', (req, res, next) => {
    console.log("middleware form post");
    console.log(req.body);
    res.redirect('/');
    //res.sendFile(path.join(__dirname,'../','Vue','Formulaire.html'));

});

module.exports=router;