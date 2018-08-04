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
  const medicalActivity = require('../models/medicalActivity.js')(sequelize, Sequelize);
  const prescription = require('../models/prescription.js')(sequelize, Sequelize);

  app.get("/", (req, res) => {
    res.send("Hello there, use our API!")
  });

  app.post('/create_user_data/:id', (req, res) => {
    userRecord.create({
      user_id: req.params.id,
      ktp: req.body.ktp,
      blood_type: req.body.blood_type,
      source_hospital: req.body.source_hospital,
      height: req.body.height,
      weight: req.body.weight,
      allergies: req.body.allergies
    })
    .then(() => res.send(`${user_id} data taken!`));
  });

  app.get("/user_data/:id", (req, res) => {
    userRecord.findOne({
      where: { user_id: req.params.id }
    })
    .then(id => {
      if (!id) res.send(`${req.params.id} user id not found`);
      res.send(id);
    });
  });

  app.post("/create_medical_activity/:id", (req, res) => {
    medicalActivity.create({
      id: req.params.id,
      diagnosis: req.body.diagnosis,
      prescription_id: req.body.prescription_id,
      notes: req.body.notes,
      user_id: req.body.user_id
    })
    .then(() => res.send(`Medical Activity id:${req.params.id} created`));
  });

  app.get("/medical_activity/:id", (req, res) => {
    medicalActivity.findOne({
      where: {id: req.params.id}
    })
    .then(id => {
      if (!id) res.send(`${req.params.id} user id not found`);
      res.send(id);
    });
  });

  app.post("/create_prescription", (req, res) => {
    prescription.create({
      prescription_id: req.params.id,
      expired_date: req.body.expired_date,
      hospital: req.body.hospital,
      doctor_name: req.body.doctor_name,
      medicine: req.body.medicine,
      hospital_stamp: req.body.hospital_stamp,
      signed_date: req.body.signed_date,
      counter: req.body.counter,
      repetition: req.body.repetition
    })
    .then(() => res.send(`Prescription id:${req.params.id} created`));
  });

  app.get("/prescription/:id", (req, res) => {
    prescription.findOne({
      where: {prescription_id: req.params.id}
    })
    .then(id => {
      if (!id) res.send(`${req.params.id} prescription id not found`);
      res.send(id);
    });
  });

  app.get("/medicine/:id", (req, res) => {
    medicine.findOne({
      where: {medicine_id: req.params.id}
    })
    .then(id => {
      if (!id) res.send(`${req.params.id} medicine id not found`);
      res.send(id);
    });
  });

}
