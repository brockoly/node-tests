const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'Seba',
    age: 24
  }, {
    name: 'Andres',
    age: 25
  }, {
    name: 'Sergio',
    age: 24
  }, {
    name: 'Pablo',
    age: 25
  }]);
});
// GET /users
// Give users a name prop and age prop

app.listen(3000);
module.exports.app = app;
