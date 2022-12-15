const uuid = require("uuid")
const path = require("path")
const ApiError = require("../errors/ApiError");
const Auto = require("../models/autoModel");

class AutoController {
  async create(req, res, next) {
    try {
      const { name, model, brand, drive, transmission, engine, power, clearance, color, price, year, region } = req.body;
      const {picture} = req.files;
      const fileName = uuid.v4() + ".jpg";
      picture.mv(path.resolve(__dirname, '..', 'static', fileName));
      const auto = await Auto.create({ name, picture: fileName, model, brand, drive, transmission, engine, power, clearance, color, price, year, region });
      return res.json(auto);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async get(req, res) {
    const queries = req.body;
    console.log(queries);
    const autos = await Auto.find({...queries}).populate("brand").populate('model');
    return res.json(autos)
  }

  async getOne(req, res) {
    const {id} = req.params;
    console.log("w");
    const auto = await Auto.findById(id)
    console.log(auto);
    return auto;
  }
}

module.exports = new AutoController();
