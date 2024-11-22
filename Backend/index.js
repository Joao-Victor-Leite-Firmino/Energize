const express = require('express');
const sequelize = require('./database');
const cors = require('cors');  // Importando o CORS
const userRoutes = require('./routes/userRoutes');  // Rota de usuário
const recordRoutes = require('./routes/recordRoutes');  // Rota de registros (mantida, mas não ajustada para o registro de usuário)

const app = express();

// Middleware para permitir CORS (útil quando o frontend está em outra porta)
app.use(cors());

// Middleware para processar requisições JSON
app.use(express.json());

// Rota para o registro de usuário (definido no `userRoutes`)
app.use('/api/users', userRoutes);  // Certificando-se de que as rotas de usuário estão corretas

// Rota para registros (se necessário para outros recursos)
app.use('/api/records', recordRoutes);

// Sincronizando o banco de dados
sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado');
    // Iniciando o servidor após a sincronização do banco de dados
    app.listen(3000, () => {
      console.log('Servidor rodando em http://localhost:3000');
    });
  })
  .catch(error => {
    console.error('Erro ao sincronizar o banco de dados:', error);
  });

// Middleware para capturar erros gerais
app.use((err, req, res, next) => {
  console.error(err.stack);  // Logando o erro no console
  res.status(500).json({ error: 'Algo deu errado. Tente novamente.' });
});
