const mongoose = require("mongoose");
const { DATABASE_URL } = process.env;

//************************* */
//* DATABASE CONNECTI0N
//************************* */
mongoose.connect(DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
//! Establish Connection ^^^
mongoose.connection
  .on("open", () => console.log("CONNECTED TO MONGOOSE"))
  .on("close", () => console.log("DISCONNECTED FROM MONGOOSE"))
  .on("error", (error) => console.log(error));
//! Connection Events ^^^

module.exports = {
  Skeleton: require("./Skeleton.js"),
};
//! export our schema so ANY folder or controller can use it ^^^