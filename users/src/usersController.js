const UsersModel = require("./usersModel");
const mongoDB = require("./db/mongoDB");
const { encryptOneWay } = require("./utils");

module.exports = class UsersController {
  constructor() {
    mongoDB.connectToDb();
  }

  async createUser(req, res) {
    try {
      req.body.password = await encryptOneWay(req.body.password);
      let user = await UsersModel.create(req.body);
      await UsersModel.findByIdAndUpdate(
        user._id,
        {
          $push: {
            equipment: req.body.equipment,
          },
        },
        { new: true, useFindAndModify: false }
      );
      return res.json({ user });
    } catch (e) {
      return res
        .status(400)
        .json({ message: e._message ? e._message : "Create user failed" });
    }
  }

  async getUser(req, res) {
    try {
      let user = await UsersModel.findById(req.params.id);
      return res.json({ user });
    } catch (e) {
      return res
        .status(400)
        .json({ message: e._message ? e._message : "Get user failed" });
    }
  }

  async getAll(req,res){
    try {
      let users = await UsersModel.find();
      return res.json({ users });
    } catch (e) {
      return res
        .status(400)
        .json({ message: e._message ? e._message : "Get all users failed" });
    }
  }
};