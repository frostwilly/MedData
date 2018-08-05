const model = require('./models');

model.sequelize.query('DROP SCHEMA public CASCADE').then( () => {
  model.sequelize.query('CREATE SCHEMA public').then(() => {
    model.sequelize.query('CREATE EXTENSION hstore').then(() => {
      model.sequelize.query('GRANT ALL ON SCHEMA public TO postgres');
      // model.sequelize.query('GRANT ALL ON SCHEMA public TO adminservice');
    });
  });
});
