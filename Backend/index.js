const express = require('express');
const sequelize = require('./database');
const userRoutes = require('./routes/userRoutes');
const recordRoutes = require('./routes/recordRoutes');

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/records', recordRoutes);

sequelize.sync().then(() => {
  console.log('Banco de dados sincronizado');
  app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
});
