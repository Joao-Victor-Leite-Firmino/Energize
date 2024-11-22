const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username, password } });
    if (!user) return res.status(401).json({ error: 'Login inválido' });
    res.json({ message: 'Login bem-sucedido' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao autenticar' });
  }
});

module.exports = router;
