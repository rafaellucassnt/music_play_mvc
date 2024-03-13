const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

// Configure o caminho para o diretório de visualizações
app.set('views', path.join(__dirname, 'views'));

// Defina o caminho para a pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

// Rota raiz
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
