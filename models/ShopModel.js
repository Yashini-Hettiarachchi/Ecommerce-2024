import mongoose from "mongoose";

const shopSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    details: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ShopModel = mongoose.model("Shop", shopSchema);

export default ShopModel;
