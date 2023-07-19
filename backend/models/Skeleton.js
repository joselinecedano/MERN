const mongoose = require("mongoose");

//****************** */
//* MODELS
//****************** */
const SkeletonSchema = new mongoose.Schema({
  name: String,
  age: Number,
  description: String,
});

const Skeleton = mongoose.model("Skeleton", SkeletonSchema);
module.exports = Skeleton;