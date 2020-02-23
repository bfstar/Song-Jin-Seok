var express = require('express');
var router = express.Router();
const { getConnection } = require('typeorm');
const Drug = require('../schemas/drugSchema');
const Prescription = require('../schemas/prescriptionSchema');

router.get('/', function(req, res, next) {
	const connection = getConnection();
	const repository = connection.getRepository(Drug.options.name);
	repository.find().then((result) => {
		res.status(200).json(result);
	});
});
router.get('/', function(req, res, next) {
	const connection = getConnection();
	const repository = connection.getRepository(Prescription.options.name);

	repository.find().then((result) => {
		res.status(200).json(result);
	});

});

router.post('/', function(req, res, next) {
	const newDrug = req.body;
	const connection = getConnection();
	const repository = connection.getRepository(newDrug.options.name);
	repository.save({
		
		drugId = newDrug.drugId,
        drugName = newDrug.drugName,
        drugAmount = newDrug.drugAmount,

	});

	res.status(201).json();
});

router.post('/', function(req, res, next) {
	const newPrescription = req.body;
	const connection = getConnection();
	const repository = connection.getRepository(newPrescription.options.name);
	repository.save({
		
		id = newPrescription.id,
        patientName = newPrescription.patientName,
        patientSex = newPrescription.patientSex,
        patientAge = newPrescription.patientAge,
        prescriptionNum = newPrescription.prescriptionNum,
        date = newPrescription.date,

	});

	res.status(201).json();
});


module.exports = router;