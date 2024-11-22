const express = require('express');
const Record = require('../models/Record');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const record = await Record.create(req.body);
    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar registro' });
  }
});

router.get('/', async (req, res) => {
  try {
    const records = await Record.findAll();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar registros' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const record = await Record.findByPk(id);

    if (!record) return res.status(404).json({ error: 'Registro não encontrado' });

    await record.update(req.body);
    res.json(record);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar registro' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const record = await Record.findByPk(id);

    if (!record) return res.status(404).json({ error: 'Registro não encontrado' });

    await record.destroy();
    res.json({ message: 'Registro excluído' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir registro' });
  }
});

module.exports = router;
