const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/DoctorController');
const validate = require('../middleware/validation')

router.get('/getalldoctors', doctorController.getAllDoctors);
router.get('/getdoctorbyid/:doctorId', doctorController.getDoctorById);
router.post('/createdoctor',validate.validateDoctor, doctorController.createDoctor);
router.put('/updatedoctor/:doctorId', validate.validateDoctor,doctorController.updateDoctor);
router.delete('/deletedoctor/:doctorId', doctorController.deleteDoctor);

module.exports = router;
