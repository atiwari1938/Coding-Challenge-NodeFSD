const Doctor = require('../models/DoctorModel');

exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.findAll();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.doctorId);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createDoctor = async (req, res) => {
  const doctorData = req.body;
  const doctor = new Doctor(doctorData);
  try {
    await doctor.save();
    res.status(201).json({ message: 'Doctor created successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateDoctor = async (req, res) => {
    try {
      const { doctorId } = req.params;
      const { doctorName, contactNumber, email, speciality, degree } = req.body;
  
      const doctor = await Doctor.findByPk(doctorId);
      if (!doctor) {
        return res.status(404).json({ error: 'Doctor not found' });
      }
  
      doctor.doctorName = doctorName;
      doctor.contactNumber = contactNumber;
      doctor.email = email;
      doctor.speciality = speciality;
      doctor.degree = degree;
  
      await doctor.save();
      res.status(200).json({ success: true, doctor });
    } catch (error) {
      console.error('Error in updating doctor:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };    

exports.deleteDoctor = async (req, res) => {
    const doctorId = req.params.doctorId;
    try {
      const doctor = await Doctor.findByPk(doctorId);
      if (!doctor) {
        return res.status(404).json({ message: 'Doctor not found' });
      }
      await doctor.destroy();
      res.json({ message: 'Doctor deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
