//////////////////////////////////////////////////// Version import du html
const express= require('express');
const router = express.Router();
const path= require('path');

router.get('/',(req,res,next)=>{
    console.log("middleware Accueil");
    res.sendFile(path.join(__dirname,'../','Vue','Accueil.html'));
});

module.exports=router;