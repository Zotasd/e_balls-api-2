// routes/leituras.js
const express = require('express');
const router = express.Router();
const Leitura = require('../models/DataRead'); //leitura ta em portugues mas eu to cringe então não vou mudar :p

// CREATE - adicionar nova leitura
router.post('/', async (req, res) => {
  try {
    const leitura = new Leitura(req.body);
    await leitura.save();
    res.status(201).json(leitura);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ - listar todas as leituras
router.get('/', async (req, res) => {
  try {
    const leituras = await Leitura.find();
    res.json(leituras);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ - buscar leitura por ID
router.get('/:id', async (req, res) => {
  try {
    const leitura = await Leitura.findById(req.params.id);
    if (!leitura) return res.status(404).json({ error: 'Leitura não encontrada' });
    res.json(leitura);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// UPDATE - atualizar uma leitura
router.put('/:id', async (req, res) => {
  try {
    const leitura = await Leitura.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!leitura) return res.status(404).json({ error: 'Leitura não encontrada' });
    res.json(leitura);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE - remover uma leitura
router.delete('/:id', async (req, res) => {
  try {
    const leitura = await Leitura.findByIdAndDelete(req.params.id);
    if (!leitura) return res.status(404).json({ error: 'Leitura não encontrada' });
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
