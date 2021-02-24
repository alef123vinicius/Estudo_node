const express = require("express");
const app = express();

// express ira usar o ejs como view engine
app.set('view engine', 'ejs');
// indicar ao nodejs para aceitar arquivos estáticos na pasta public
app.use(express.static('public'))


app.get("/:nome/:lang", (req, res) => {

    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;

    var produtos = [
        {nome: "Doritos", preco: 3.50},
        {nome: "Coca cola", preco: 10.00},
        {nome: "leite", preco: 5.00}
    ]
    // res.send("Bem vindo  a minha aplicação");
    // renderização é desenhar alguma coisa na tela
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "empresa",
        inscritos: 0,
        msg: exibirMsg,
        produtos: produtos
    });
})

app.listen(8080, ()=>{console.log("App rodando!");});