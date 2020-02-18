var express = require('express');
var router = express.Router();
const { getConnection } = require('typeorm');
const Drug = require('../schemas/drugSchema');
const Prescription = require('../schemas/prescriptionSchema');
const Personal = require('../schemas/personalSchema');

router.get('/', function(req, res, next) {
	const connection = getConnection();
	const repository = connection.getRepository(Drug.options.name);
	repository.find().then((result) => {
		res.status(200).json(result);
	});
});

router.post('/', function(req, res, next) {
	const newDrug = req.body;
	const connection = getConnection();
	const repository = connection.getRepository(Drug.options.name);
	repository.save({
		drugName: newDrug.name,
		medicineNum: newDrug.medicineNum,

	});

	res.status(201).json();
});


module.exports = router;