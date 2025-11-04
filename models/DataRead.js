const mongoose = require('mongoose');

// Schema de dados lidos
const DataSchema = new mongoose.Schema({
  id_device: { type: String, required: true },//qual o tippo do id?
  location: { type: String, required: true, maxlength: 200 },
  recived_data: { type: String, required: true, maxlength: 2000 },  // só texto ja que não tenho a classe property
  created_at: { type: Date, default: Date.now }
});

// Cria o modelo Device


const DataRead = mongoose.model('DataSchema', DataSchema);

module.exports = DataRead;


