const uuid = require("uuid")
const path = require("path")
const ApiError = require("../errors/ApiError");
const AutoModel = require("../models/autoModelModel");

class AutoModelController {
  async create(req, res, next) {
    try {
      const { name, brand } = req.body;
      console.log(name);
      const autoModel = await AutoModel.create({ name: name, brand });
      return res.json(autoModel);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async get(req, res) {
    const autoModel = await AutoModel.find();
    return res.json(autoModel);
  }
  
  async getByBrand(req, res) {
    const {brand} = req.params;
    const autoModel = await AutoModel.find({brand})
    return res.json(autoModel);
  }
}

module.exports = new AutoModelController();
