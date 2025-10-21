const mongoose = require('mongoose');

// Schema Device
const DataSchema = new mongoose.Schema({
  id_device: { type: String, required: true },//qual o tippo do id?
  location: { type: String, required: true, maxlength: 200 },
  data_desc: { type: String, required: true, maxlength: 200 },  // só texto ja que não tenho a classe property
  timestamp: { type: Date, default: Date.now }
});

// Cria o modelo Device


const Device = mongoose.model('Device', deviceSchema);

module.exports = Device;

//mudar pra armazenar os dados de coleta
  //id do device
  //tipo de sensor que recebeu o bgl
  //descroção do sensor
  //data de recebimento do bixo

