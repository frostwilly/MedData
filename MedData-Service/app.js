const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('med_database', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres'
});

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

require('./app/routes.js')(app, sequelize);

const server = app.listen(2000, () => console.log('Listening on port 2000'));
