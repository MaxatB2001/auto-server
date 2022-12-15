const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const brandSchema = mongoose.Schema(
  {
    name: String,
    picture: {
      type: String,
      required: true,
    },
  },
  {
    minimize: false,
    timestamps: true,
  }
);

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
