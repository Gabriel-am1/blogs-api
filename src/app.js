const express = require('express');

const loginRouters = require('./routes/loginRouter');
const userRouters = require('./routes/userRoutes');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', loginRouters);
app.use('/user', userRouters);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
