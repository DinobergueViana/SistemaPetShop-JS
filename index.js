const http = require('http')
const servicos = require("./servicos");
const url = require('url');
const listaDePets = require('./listaDePets.json')

http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/plain;charset=utf8"});

    const urlCompleta = url.parse(req.url, true);
    const queryString = urlCompleta.query;
    const rota = urlCompleta.pathname;

    if(rota == "/"){
        let listar = servicos.listarPets(listaDePets);
        res.end(listar);
    }
    if(rota == "/pet"){
        let {nome, rga} = queryString;
        let pet = servicos.buscarPet(listaDePets, rga);
        res.end(pet)

    }
    if(rota =="/pet/add"){
        
    }

}).listen(3000,'localhost')

