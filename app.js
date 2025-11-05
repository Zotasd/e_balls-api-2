const http = require("http");
const express = require("express");
const mongoose = require('mongoose');
const dataReadRouter = require('./routes/DataRead');

const port = 3000;        //<-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Servidor executando com ExpressJS</h1>");
});

// conexão com o monog
//mongoose.connect('mongodb+srv://mateus:Ligadajustica7@e-station.txocscw.mongodb.net/?retryWrites=true&w=majority&appName=e-Station')
mongoose.connect('mongodb+srv://felipezonta_db_user:Tnj6LW52xsGFkHSV@e-balls2.0anmq2a.mongodb.net/')
.then(async () => {
    console.log('Conectado a mongodb show!');

    // FORÇAR CRIAÇÃO DAS COLEÇÕES
    await Promise.all([
      mongoose.connection.createCollection('device')
    ]);

    console.log('calesao criada se pa');
    
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  })
.catch(err => console.error('deu bolas, erro:', err));

// rotas
app.use(express.json());
app.use('/api/dataRead', dataReadRouter);

// inicia o monstro?
//http.createServer(app).listen(port, () => console.log("Servidor executando na porta ${port}"));

