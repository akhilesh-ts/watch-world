import mongoose from "mongoose";
import Mongoose from "mongoose";

const productSchema = new Mongoose.Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    link: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
