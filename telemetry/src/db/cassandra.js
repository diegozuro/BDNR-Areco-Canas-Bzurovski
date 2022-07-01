const cassandra = require("cassandra-driver");
const { createVehicleInfoTableQuery } = require("./vehicleInfoTable");

const client = new cassandra.Client({
  contactPoints: process.env.CONTACT_POINTS
    ? [process.env.CONTACT_POINTS]
    : ["127.0.0.1"],
  localDataCenter: process.env.CASSANDRA_LOCAL_DATA_CENTER || "datacenter1",
  keyspace: process.env.CASSANDRA_KEYSPACE || "bdnr",
});

const config = async () => {
  try {
    await client.execute(createVehicleInfoTableQuery);
    
    console.log("Cassandra tables created");
  } catch (e) {
    console.log("Cassandra tables fail to be created:" + e);
  }
};

module.exports = { config, client };
