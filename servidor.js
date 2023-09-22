const http = require("http");
const host = "localhost";
const port = 8080;

const chalk =require ('chalk');

const nombreDev = "Juan Camilo Marin";
const mensajeJson = {'0':'Bienvenidos al serverLab','1':'Server desarrollado el 22-Septiembre-2023'};




const requestListener = function(req, res){
res.setHeader("Content-Type", "text/html");
res.writeHead(200);
res.end(`<html><body><h1>${nombreDev}</h1><h2>${mensajeJson[0]}</h2><h3>${mensajeJson[1]}</h3></body></html>`);
}


const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(chalk.green(`Server is running on http://${host}:${port}`));
});
