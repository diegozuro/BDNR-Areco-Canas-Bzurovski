const { client, config } = require("./db/cassandra");

module.exports = class UsersController {
  constructor() {
    config();
  }

  async createVehicleInformation(req, res) {
    try {
      const query = 'INSERT INTO vehicle_information (vehicle_information_id, waves, temperature, vibration, voltage, pressure, speed, current_time) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'; 
      const params = [ req.params.vehicleInfoId, req.body.waves, req.body.temperature, req.body.vibration,
         req.body.voltage, req.body.pressure, req.body.speed, req.body.current_time ];

      client.execute(query, params, { prepare: true })
        .then(result => console.log('Row inserted on the cluster'));

      res.send("Saved correctly");
    } catch (e) {
      res.status(400).send({ "Insert error: ": e });
    }
  }

  async getAll(req, res){
    try {
      const query = 'SELECT * FROM bdnr.vehicle_information LIMIT 5'; 

      client.execute(query, { prepare: true })
        .then(result => {
          return res.json( result.rows );
        });

    } catch (e) {
      return res
        .status(400)
        .json({ message: e._message ? e._message : "Get all vehicle information failed: " + e });
    }
  }
};