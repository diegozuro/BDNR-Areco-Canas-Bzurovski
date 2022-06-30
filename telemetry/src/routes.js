var express = require('express');
const VehicleInfoController = require('./vehicleInfoController');

const router = express.Router();
const vehicleInfoController = new VehicleInfoController();

router.post('/:vehicleInfoId', function (req, res) {
  vehicleInfoController.createVehicleInformation(req, res);
});

router.get('/', function (req, res) {
  vehicleInfoController.getAll(req, res);
});

module.exports = router;