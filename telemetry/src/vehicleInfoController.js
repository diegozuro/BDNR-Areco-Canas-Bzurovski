const { VehicleInformation, config } = require("./db/cassandra");

module.exports = class UsersController {
  constructor() {
    config();
  }

  async createVehicleInformation(req, res) {
    try {
      await VehicleInformation.insert({
        ...req.body,
        vehicle_information_id: req.params.vehicleInfoId,
      });

      res.send("Saved correctly");
    } catch (e) {
      res.status(400).send({ error: e });
    }
  }

  // async getAll(req,res){
  //   try {
  //     let users = await UsersModel.find();
  //     return res.json({ users });
  //   } catch (e) {
  //     return res
  //       .status(400)
  //       .json({ message: e._message ? e._message : "Get all vehicle information failed" });
  //   }
  // }
};