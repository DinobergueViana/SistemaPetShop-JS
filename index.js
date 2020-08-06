const servicos = require("./servicos");
const fs = require('fs');
const url = require('url');
const listaDePets = require('./listaDePets.json')

const http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/plain;charset=utf8"});

    const parsedUrl = url.parse(req.url, true);
    const {
        rga,
        nome} = parsedUrl.query;

    switch(req.url){
        case "/":
            let lista = servicos.listarPets(listaDePets)
            res.end(lista);
            break;
        case "/pet":
            let resultado = servicos.buscarPet(rga);
            res.end(resultado);
            break;
        case "/pet/add":
            servicos.adicionarPet(rga, nome);
            res.end("Pet adicionado com sucesso!");
            break;
    }

}).listen(3000,'localhost')

