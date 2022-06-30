const cassandra = require("cassandra-driver");
const { VehicleInfoConfig, createVehicleInfoTableQuery } = require("./vehicleInfoModel");

const client = new cassandra.Client({
  contactPoints: process.env.CONTACT_POINTS
    ? [process.env.CONTACT_POINTS]
    : ["127.0.0.1"],
  localDataCenter: process.env.CASSANDRA_LOCAL_DATA_CENTER || "datacenter1",
  keyspace: process.env.CASSANDRA_KEYSPACE || "bdnr",
});

const mappingOptions = {
  models: {
    vehicle_information: VehicleInfoConfig,
  },
};

const mapper = new cassandra.mapping.Mapper(client, {
  mappingOptions,
});

const VehicleInformation = mapper.forModel("vehicle_information");

const config = async () => {
  try {
    await client.execute(createVehicleInfoTableQuery);
    
    console.log("Cassandra tables created");
  } catch (e) {
    console.log("Cassandra tables fail to be created:" + e);
  }
};

module.exports = { VehicleInformation,  config };
