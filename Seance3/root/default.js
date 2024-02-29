//////////////////////////////////////////////////// Version import du html
const express = require('express');
const router = express.Router();
const path = require('path');
/**
const accessMessage= require('./form');
 */

router.get('/', (req, res, next) => {
    console.log("middleware Accueil get");
    res.sendFile(path.join(__dirname, '../', 'Vue', 'Accueil.html'));
});
/**
 console.log(accessMessage.message); //Verification que le message soit bien passé
 */

module.exports = router;