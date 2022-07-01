const createVehicleInfoTableQuery = `CREATE TABLE vehicle_information (
  vehicle_information_id text,
  waves double,
  temperature double,
  vibration double,
  voltage double,
  pressure double,
  speed double,
  current_time timestamp,        
  PRIMARY KEY(vehicle_information_id,current_time)
);`;

module.exports = { createVehicleInfoTableQuery };
