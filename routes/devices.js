const express = require('express');
const router = express.Router();
const Device = require('../models/Leitura');

// CREATE - adicionar novo device
router.post('/', async (req, res) => {
  try {
    const device = new Device(req.body);
    await device.save();
    res.status(201).json(device);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ - listar todos os devices
router.get('/', async (req, res) => {
  try {
    const devices = await Device.find();
    res.json(devices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ - buscar device por ID
router.get('/:id', async (req, res) => {
  try {
    const device = await Device.findById(req.params.id);
    if (!device) return res.status(404).json({ error: 'Device não encontrado' });
    res.json(device);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// UPDATE - atualizar um device
router.put('/:id', async (req, res) => {
  try {
    const device = await Device.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!device) return res.status(404).json({ error: 'Device não encontrado' });
    res.json(device);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE - remover um device
router.delete('/:id', async (req, res) => {
  try {
    const device = await Device.findByIdAndDelete(req.params.id);
    if (!device) return res.status(404).json({ error: 'Device não encontrado' });
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
