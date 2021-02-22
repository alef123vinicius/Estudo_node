const express = require('express');
const routes  = require('./routes')
const app = express();
const cors = require('cors')

app.use(express.json());

app.use(cors()); //habilitando cors na nossa aplicacao

app.use('/api/comentarios', routes);

app.listen(process.env.PORT || '3000', () => {
    console.log(`Server is running on port: ${process.env.PORT || '3000'}`);
});
