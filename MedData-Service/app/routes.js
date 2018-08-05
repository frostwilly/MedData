const Sequelize = require('sequelize');
const moment = require('moment');
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
      allergies: req.body.allergies,
      phone: req.body.phone,
      birthday: req.body.birthday,
      name: req.body.name,
      phone: req.body.phone
    })
    .then(() => res.send(`${req.params.id} data saved!`));
  });

  app.get("/user_data/:id", (req, res) => {
    userRecord.findOne({
      where: { user_id: req.params.id }
    })
    .then(user_data => {
      if (!user_data) return res.send(`${req.params.id} user id not found`);
      console.log(user_data);
      const data = {
        name: user_data.name,
        age: moment().diff(user_data.birthday, 'years'),
        ktp: user_data.ktp,
        phone: user_data.phone,
        blood_type: user_data.blood_type,
        height: user_data.height,
        weight: user_data.weight
      };

      res.send(data);
    });
  });

  app.post("/create_medical_activity/:id", (req, res) => {
    medicalActivity.create({
      id: req.params.id,
      diagnosis: req.body.diagnosis,
      prescription_id: req.body.prescription_id,
      notes: req.body.notes,
      hospital: req.body.hospital,
      user_id: req.body.user_id,
    })
    .then(() => res.send(`Medical Activity id: ${req.params.id} created`));
  });

  app.get("/records/:id", (req, res) => {
    userRecord.findAll({
      where: { user_id: req.params.id },
      order: [
        ['createdAt',  'DESC']
      ],
      attributes: ['diagnosis', 'notes', 'createdAt', 'hospital']
    })
    .then(medical_activity => {
      if (!medical_activity) return res.send(`${req.params.id} user id not found`);
      res.send(medical_activity);
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

  app.post("/create_medicine", (req, res) => {
    medicine.create({
      medicine_id: req.params.id,
      medicine_type: req.body.medicine_type,
      medicine_name: req.body.medicine_name,
      dosage: req.body.dosage,
      rules: req.body.rules,
      repetition: req.body.repetition,
      counter: req.body.counter
    })
    .then(() => res.send(`Medicine id:${req.params.id} created`));
  })

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
