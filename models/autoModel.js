const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const autoSchema = mongoose.Schema(
  {
    name: String,
    picture: {
      type: String,
      required: true,
    },
    brand: { type: ObjectId, ref: "Brand", required: true },
    model: { type: ObjectId, ref: "AutoModel", required: true },
    drive: {
      type: String,
      enum : ['передний','задний','полный'],
      default: 'передний'
    },
    transmission: {
      type: String,
      enum : ['автомат','вариатор','механика'],
      default: 'автомат'
    },
    engine: {
      type: String,
      enum : ['бензин','дизель','гибрид', 'электро'],
      default: 'бензин'
    },
    power: Number,
    clearance: Number,
    color: String,
    price: Number,
    year: Number,
    region: String,
  },
  {
    minimize: false,
    timestamps: true,
  }
);

const Auto = mongoose.model("Auto", autoSchema);

module.exports = Auto;
