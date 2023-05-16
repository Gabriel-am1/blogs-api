const express = require('express');

const userRouters = require('./routes/userRoutes');
const loginRouters = require('./routes/loginRouter');
const categorieRouters = require('./routes/categorieRouter');
const postRouters = require('./routes/postRouter');

const errorMiddleware = require('./middleware/error');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/user', userRouters);
app.use('/login', loginRouters);
app.use('/categories', categorieRouters);
app.use('/post', postRouters);

app.use(errorMiddleware);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
