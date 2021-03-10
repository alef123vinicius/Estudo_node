/**
 * arquivo: server.js
 * descrição: arquivo responsável por toda a configuração e execução do Back-end ('Employee')
 * data: 09/03/2021
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server em execução na porta: ", port);
});