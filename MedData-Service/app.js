const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const host_server = 2000;

const sequelize = new Sequelize('med_database', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres'
});

app.use(cors());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

require('./app/routes.js')(app, sequelize);

const server = app.listen(host_server, () => console.log('Listening on port', host_server));
