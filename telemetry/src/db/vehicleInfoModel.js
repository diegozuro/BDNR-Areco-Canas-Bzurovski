const cassandra = require("cassandra-driver");

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

const VehicleInfoConfig = {
  tables: ["vehicle_information"],
  mappings: new cassandra.mapping.UnderscoreCqlToCamelCaseMappings(),
  columns: {
    vehicle_information_id: "vehicle_information_id",
    waves: "waves",
    temperature: "temperature",
    vibration: "vibration",
    voltage: "voltage",
    pressure: "pressure",
    speed: "speed",
    current_time: "current_time",
  },
};

module.exports = { VehicleInfoConfig, createVehicleInfoTableQuery };
