/////////////////////////////////////////////// Formulaire avec express et MiddleWare dans des 3 nouveaux fichier
/**const express= require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log("middleware Accueil");
    res.send("<html lang='fr'><head><title>page accueil</title></head><body><h1>page accueil</h1></body>");
});

module.exports=router;*/

//////////////////////////////////////////////////// Version import du html
const express= require('express');
const router = express.Router();
const path= require('path');

router.get('/',(req,res,next)=>{
    console.log("middleware Accueil");
    res.sendFile(path.join(__dirname,'../','Vue','Accueil.html'));
});

module.exports=router;