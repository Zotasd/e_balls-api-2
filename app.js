const http = require("http");
const express = require("express");
const mongoose = require('mongoose');
const devicesRouter = require('./routes/devices');

const port = 3000;
const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Servidor executando com ExpressJS</h1>");
});

// conexão com o monog
mongoose.connect('mongodb+srv://mateus:Ligadajustica7@e-station.txocscw.mongodb.net/?retryWrites=true&w=majority&appName=e-Station')
.then(async () => {
    console.log('Conectado a mongodb show!');

    // FORÇAR CRIAÇÃO DAS COLEÇÕES
    await Promise.all([
      mongoose.connection.createCollection('device')
    ]);

    console.log('calesao criada se pa');
    
    app.listen(port, () => {
      console.log(`pepinosada`);
    });
  })
.catch(err => console.error('deu bolas, erro:', err));

// rotas
//app.use('/devices', devicesRouter);
app.use(express.json());
app.use('/api/devices', devicesRouter);

// inicia o monstro
http.createServer(app).listen(port, () => console.log("Servidor executando na porta ${port}"));

