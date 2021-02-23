const express = require("express"); //importando o express
const app = express(); // iniciando o express


app.get("/", function(req, res) {
    // a resposta só pode ser enviada uma vez
    // não se pode enviar dois send pois no primeiro ja conclui a conexão
    res.send("Bem vindo ao teste com express");
});

// paramemtro não obrigatório com o ? no final
app.get("/blog/:artigo?", function(req, res){

    var artigo = req.params.artigo;

    if(artigo){
        res.send("<h2> Artigo: " + artigo + "</h2>");
    } else{
        res.send("Bem vindo ao meu Blog");
    }
    
});


// exemplo query param
// totalmente opcinal passando apos ? na url de requisicao
app.get("/canal/youtube", function(req, res){
    var canal = req.query["canal"];
    res.send("<h1>Bem vindo ao meu canal</h1>"+ canal);
});

app.get("/ola/:nome/:empresa?", function(req, res) {
    // req são os dados enviados pelo usuário
    // res são os dados enviados para o usuário
    // nome = req.params.nome
    // res.send("<h1>Oi " + nome + "!</h1>"
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send(`<h1>Oi ${req.params.nome}!, voce é da empresa: ${req.params.empresa ? empresa : ""} </h1>`)
});

app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    } else {
        console.log("Servidor iniciado com sucesso!");
    }
})

