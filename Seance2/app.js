//NodeJs c'est lui qui lance le serveur, autre que Apache
//const http = require('http');const port = 5000;  //Plus besoin pour le middleware

let j = 0;

// Methode 1
/**function reqListener(req, res){
    console.log("serveur démarré");
    console.log(req);
    //process.abort();
}

const server = http.createServer({reqListener});*/

//////////////////////////////////////////////////// Methode 2
/**const server = http.createServer(function reqListener(req, res) {
    console.log("Serveur démarré");
    console.log(req);
});*/

//////////////////////////////////////////////////// Methode 3
/**const server = http.createServer((req, res) =>{
    console.log("Serveur démarré");

    j=j+1;
    console.log(j);


    console.log(req);
    const url= req.url;
    console.log("La ressource est : "+req.url);
    console.log("la méthode HTTP est :" + req.method);

    if (url==="/"){

    }

    //console.log(req.headers['user-agent']);
    res.setHeader('Content-Type', 'text/html');
    res.write("<html lang='fr'> <head> <title>page 1</title></head>" + "<body><h1>Page 1</h1></body></html>");
    res.end();
});*/

//////////////////////////////////////////////////// Methode 4
/**const server = http.createServer((req, res) =>{
    console.log("Serveur démarré");

    j=j+1;
    console.log(j);

    console.log(req);
    const url= req.url; //Création de l'url
    console.log("La ressource est : "+req.url);
    console.log("la méthode HTTP est :" + req.method);

    res.setHeader('Content-Type', 'text/html');
    if(url==="/"){
        res.write("<html lang='fr'> <head> <title>page 1</title></head>" + "<body><h1>Page 1</h1></body></html>");
        return res.end();
    }

    //console.log(req.headers['user-agent']);

    res.write("<html lang='fr'> <head> <title>page 2</title></head>" + "<body><h1>Page 2</h1></body></html>");
    res.end();
});*/

//////////////////////////////////////////////////// Formulaire
/**const server = http.createServer((req, res) => {
    console.log("Serveur démarré");

    j = j + 1;
    console.log(j);

    console.log(req);
    const url = req.url; //Création de l'url
    console.log("La ressource est : " + req.url);
    console.log("la méthode HTTP est :" + req.method);

    res.setHeader('Content-Type', 'text/html');
    if (url === "/") {
        res.write("<html lang='fr'> <head> <title>page 1</title></head>" +
            "<body><h1>Page 1</h1> " +
            "<form action='/message' method='post'>" +
            "<input type='text' name='message'> " +
            "<button type='submit'> OK </button> " +
            "</form>" +
            "</body>" +
            "</html>");
        return res.end();
    }
    //console.log(req.headers['user-agent']);

    res.write("<html lang='fr'> <head> <title>page 2</title></head>" + "<body><h1>Page 2</h1></body></html>");
    res.end();
});*/

///////////////////////////////////////////////////// Navigation page avec GET POST
/**const server = http.createServer((req, res) => {
    console.log("Serveur démarré");

    j = j + 1;
    console.log(j);

    console.log(req);
    const url = req.url; //Création de l'url
    console.log("La ressource est : " + req.url);

    const method = req.method;    // besoin pour empecher d'acccéder à une page via get
    console.log("la méthode HTTP est :" + req.method);

    res.setHeader('Content-Type', 'text/html');
    if (url === "/") {
        res.write("<html lang='fr'> <head> <title>page 1</title></head>" +
            "<body><h1>Page 1</h1> " +
            "<form action='/message' method='post'>" +
            "<input type='text' name='message'> " +
            "<button type='submit'> OK </button> " +
            "</form>" +
            "</body>" +
            "</html>");
        return res.end();
    }

    if (url === "/message" && method==='POST') {
        res.write("<html lang='fr'> <head> <title>page 1</title></head>" +
            "<body><h1>Page message</h1> " +
            "</body>" +
            "</html>");
        return res.end();
    }

    //console.log(req.headers['user-agent']);

    res.write("<html lang='fr'> <head> <title>page 2</title></head>" + "<body><h1>Page 2</h1></body></html>");
    res.end();
});*/

//////////////////////////////////////////////////// écrire dans un fichier, une donnée entré dans le formulaire
/**const fs = require('fs')
 const server = http.createServer((req, res) => {
    console.log("Serveur démarré");

    j = j + 1;
    console.log(j);

    console.log(req);
    const url = req.url; //Création de l'url
    console.log("La ressource est : " + req.url);

    const method = req.method;    // besoin pour empecher d'acccéder à une page via get
    console.log("la méthode HTTP est :" + req.method);

    res.setHeader('Content-Type', 'text/html');
    if (url === "/") {
        res.write("<html lang='fr'> <head> <title>page 1</title></head>" +
            "<body><h1>Page 1</h1> " +
            "<form action='/message' method='post'>" +
            "<input type='text' name='message'> " +
            "<button type='submit'> OK </button> " +
            "</form>" +
            "</body>" +
            "</html>");
        return res.end();
    }

    if (url === "/message" && method === 'POST') {
        const data = [];
        req.on('data', (paquet) => {
            console.log(paquet);
            data.push(paquet);
        })

        req.on('end', () => {
            const dataParse = Buffer.concat(data).toString();      //message = blabla du formulaire, le split va séparer et blabla va s'afficher
            //const message = dataParse;
            const message=dataParse.split('=')[1];
            fs.writeFileSync('message.txt', message);
        })
        res.write("<html lang='fr'> <head> <title>page 1</title></head>" +
            "<body><h1>Page message</h1> " +
            "</body>" +
            "</html>");
        return res.end();
    }

    //console.log(req.headers['user-agent']);
    res.write("<html lang='fr'> <head> <title>page 2</title></head>" + "<body><h1>Page 2</h1></body></html>");
    res.end();
});*/

//////////////////////////////////////////////////// Redirection
/**const fs = require('fs')
 const server = http.createServer((req, res) => {
    console.log("Serveur démarré");

    j = j + 1;
    console.log(j);

    console.log(req);
    const url = req.url; //Création de l'url
    console.log("La ressource est : " + req.url);

    const method = req.method;    // besoin pour empecher d'acccéder à une page via get
    console.log("la méthode HTTP est :" + req.method);

    res.setHeader('Content-Type', 'text/html');
    if (url === "/") {
        res.write("<html lang='fr'> <head> <title>page 1</title></head>" +
            "<body><h1>Page 1</h1> " +
            "<form action='/message' method='post'>" +
            "<input type='text' name='message'> " +
            "<button type='submit'> OK </button> " +
            "</form>" +
            "</body>" +
            "</html>");
        return res.end();
    }

    if (url === "/message" && method === 'POST') {
        const data = [];
        req.on('data', (paquet) => {
            console.log(paquet);
            data.push(paquet);
        })

        req.on('end', () => {
            const dataParse = Buffer.concat(data).toString();      //message = blabla du formulaire, le split va séparer et blabla va s'afficher
            //const message = dataParse;
            const message = dataParse.split('=')[1];
            fs.writeFileSync('message.txt', message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }

    //console.log(req.headers['user-agent']);
    res.write("<html lang='fr'> <head> <title>page 2</title></head>" + "<body><h1>Page 2</h1></body></html>");
    res.end();
});*/

//////////////////////////////////////////////////// Changement de méthode d'écriture
/**const fs = require('fs')
 const server = http.createServer((req, res) => {
    console.log("Serveur démarré");

    j = j + 1;
    console.log(j);

    console.log(req);
    const url = req.url; //Création de l'url
    console.log("La ressource est : " + req.url);

    const method = req.method;    // besoin pour empecher d'acccéder à une page via get
    console.log("la méthode HTTP est :" + req.method);

    res.setHeader('Content-Type', 'text/html');
    if (url === "/") {
        res.write("<html lang='fr'> <head> <title>page 1</title></head>" +
            "<body><h1>Page 1</h1> " +
            "<form action='/message' method='post'>" +
            "<input type='text' name='message'> " +
            "<button type='submit'> OK </button> " +
            "</form>" +
            "</body>" +
            "</html>");
        return res.end();
    }

    if (url === "/message" && method === 'POST') {
        const data = [];
        req.on('data', (paquet) => {
            console.log(paquet);
            data.push(paquet);
        })

        req.on('end', () => {
            const dataParse = Buffer.concat(data).toString();      //message = blabla du formulaire, le split va séparer et blabla va s'afficher
            //const message = dataParse;
            const message = dataParse.split('=')[1];
            fs.writeFile('message.txt', message,(err)=>{     // Changement de la méthode d'écriture
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    //console.log(req.headers['user-agent']);
    res.write("<html lang='fr'> <head> <title>page 2</title></head>" + "<body><h1>Page 2</h1></body></html>");
    res.end();
});*/

//////////////////////////////////////////////////// Version avec plusieurs pages (routes.js)
/**const http = require('http')
 const port = 5000;
 const routes = require('/Seance2/root/routes.js');
 const server = http.createServer(routes);
 server.listen(port);
 */

////////////////////////////////////////////////// Version avec plusieurs pages, avec express
//express contient http
/**const express = require('express');
 const app = express();
 const server = http.createServer(app);
 console.log("Serveur démarré sur le port :" + port);

 // rien ne se passe cannot get*/

//////////////////////////////////////////////////// Version 2 Middleware, avec express, avec page
/**
 // plus besoin de http
 const express = require('express');
 const app = express();
 console.log("Serveur démarré sur le port :" + port);

 app.listen(port);
 app.use((req,res,next)=>{
    console.log("middleware 1");
    next();
})

 app.use((req,res,next)=>{
    console.log("middleware 2");
    next();
})

 app.use((req,res,next)=>{
    console.log("middleware fin");
    res.send("<html lang='fr'><head><title>page fin</title></head><body><h1>page Finale</h1></body>")
    next();
})*/

////////////////////////////////////////////////////Version 3 Middleware, avec express, avec page et lien
/**const express = require('express');
 const app = express();
 console.log("Serveur démarré sur le port :" + port);

 app.listen(port);

 app.use('/test',(req,res,next)=>{
    console.log("middleware test");
    res.send("<html lang='fr'><head><title>page test</title></head><body><h1>page test</h1></body>");
});

 app.use('/',(req,res,next)=>{
    console.log("middleware 1");
    res.send("<html lang='fr'><head><title>page 1</title></head><body><h1>page 1</h1></body>");
});

 app.use('/fin',(req,res,next)=>{
    console.log("middleware fin");
    res.send("<html lang='fr'><head><title>page fin</title></head><body><h1>page Finale</h1></body>");
});*/

/////////////////////////////////////////////// Formulaire avec express et MiddleWare dans des 3 nouveaux fichier
/**const bodyParser = require('body-parser');
 const express = require('express');
 const app = express();
 const port = 5000;

 const defaut = require("/Seance2/root/default");
 const form = require("/Seance2/root/form");

 app.listen(port);
 app.use(bodyParser.urlencoded({extended: false}));

 app.use(defaut);
 app.use(form);

 app.use((req,res,next)=>{
    res.status(404).send("<html><head><title>erreur 404</title></head><body><h1>Not found : 404</h1></body></html>");
})

 console.log("Serveur démarré sur le port :" + port);*/

//////////////////////////////////////////////////// Version import du html
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 5000;
const path = require('path');

const defaut = require("./root/default");
const form = require("./root/form");

app.listen(port);
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));   // Import css

app.use(defaut);    //import le controleur defaut
app.use(form);       // import controleur form

app.use((req, res, next) => {
    res.status(404).send("<html><head><title>erreur 404</title></head><body><h1>Not found : 404</h1></body></html>");
})     // Erreur 404

console.log("Serveur démarré sur le port :" + port);


//server.listen(port);     //Pour le middleware il faut le mettre avant