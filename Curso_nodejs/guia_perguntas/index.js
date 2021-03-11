const express = require("express");
const app = express();
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");
//Database 
connection
    .authenticate()
    .then(() => {
        console.log("conexão feita com sucesso!");
    })
    .catch((err) => {
        console.log(err);
    });

// deprecated
// const bodyParser = require("body-parser");

// express ira usar o ejs como view engine
app.set('view engine', 'ejs');
// indicar ao nodejs para aceitar arquivos estáticos na pasta public
app.use(express.static('public'))

// bodyparser traduz os dados para um formato que o javascript consiga ler
// deprecated
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
    Pergunta.findAll({raw: true, order: [
        ['id', 'DESC'] // ASC crecente e DESC descrescente
    ]}).then(perguntas => {
        res.render("index", {
            perguntas: perguntas
        });
    }).catch((err) => {
        console.log("Error: " + err);
    });
});

app.get("/perguntar", (req,res) => {
    res.render("perguntar");
});

app.get("/pergunta/:id", (req,res) => {
    var id = req.params.id;
    Pergunta.findOne({
        where: {id: id}
    }).then(pergunta => {
        if(pergunta){

            Resposta.findAll({
                where: {perguntaId: pergunta.id},
                order: [['id', 'DESC']]
            }).then(respostas => {
                res.render('pergunta', {
                    pergunta: pergunta,
                    respostas: respostas !== undefined ? respostas : {}
                });
            });
        } else{
            res.redirect("/")
        }
        
    }).catch((err) => {
        console.log("error: "+ err);
    });
});

app.post("/salvarpergunta", (req,res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/");
    }).catch((err) => {
        console.log("Error: "+ err);
    });
});

app.post("/salvarresposta", (req, res) => {
    var corpo = req.body.corpo;
    var perguntaId = req.body.perguntaId;
    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(() => {
        res.redirect("/pergunta/" + perguntaId);
    }).catch((err) => {
        console.log("Error", err);
    });
});

app.listen(8080, ()=>{console.log("App rodando!");});