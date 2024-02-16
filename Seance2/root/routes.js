//Version avec plusieurs pages
const fs = require('fs');

const requestHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;

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
}

module.exports = requestHandler;