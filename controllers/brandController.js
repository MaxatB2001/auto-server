const uuid = require("uuid")
const path = require("path")
const ApiError = require("../errors/ApiError");
const Brand = require("../models/brandModel");

class BrandController {
  async create(req, res, next) {
    try {
      const { name } = req.body;
      const {picture} = req.files;
      const fileName = uuid.v4() + ".jpg";
      picture.mv(path.resolve(__dirname, '..', 'static', fileName));
      const brand = await Brand.create({ name, picture: fileName });
      return res.json(brand);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async get(req, res) {
    const brands = await Brand.find();
    return res.json(brands);
  }
}

module.exports = new BrandController();
