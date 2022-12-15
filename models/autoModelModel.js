const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const autoModelSchema = mongoose.Schema(
  {
    name: String,
    brand: { type: ObjectId, ref: "Brand", required: true },
  },
  {
    minimize: false,
    timestamps: true,
  }
);

const AutoModel = mongoose.model("AutoModel", autoModelSchema);

module.exports = AutoModel;
