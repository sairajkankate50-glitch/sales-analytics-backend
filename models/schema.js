import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema({
  month: String,
  product: String,
  quantity: Number,
  revenue: {
  type: Number,
  default: 0
}
});

export default mongoose.model("Analytics", analyticsSchema);
