const Sequelize = require('sequelize');
// const
//
//

// Date
// Hospital Name
// Diagnosis
//
//
//
//
// Prescription
// DATE: MADE
// EXPIRED_DATE: ''
// Hospital
// Doctor_name: '',
// Prescription_code: '',
// PHARMACY
// MEDICINE: {
//    medicine_type: GENERIC || SPECIALIZED
//    medicine_name: '',
//    dosage: ''. mg,
//    rules: '     ',
// }
// HOSPTIAL_STAMP: TRUE/FALSE
// SIGNED_DATE: DATE();
// REPETITION: TIMES_REPTITION

module.exports = (app, sequelize) => {

  const userRecord = require('../models/userRecord.js')(sequelize, Sequelize);

  app.get("/", (req, res) => {
    res.send("Hello there, use our API!")
  });

  app.post('/create_user_data', (req, res) => {
    userRecord.create({
      user_id: req.body.user_id,
      ktp: req.body.ktp,
      blood_type: req.body.blood_type,
      source_hospital: req.body.source_hospital
    })
    .then(() => res.send(`${req.body.user_id} loan id data taken!`));
  });

  app.get("/user_data/:id", (req, res) => {
    userRecord.findOne({
      where: { user_id: req.params.id }
    })
    .then(loan => {
      if (!loan) res.send(`${req.params.id} loan id not found`);
      res.send(loan);
    });
  });
}
