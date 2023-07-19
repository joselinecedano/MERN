//********************* */
//*DEPENDENCIES
//********************* */
const express = require("express");
// import express ^^^
const app = express();
// create application object
const cors = require('cors')
//enables cross origin requests
require("dotenv").config();
// get .env variables
const { PORT } = process.env;
// pull PORT from .env
const routes = require("./routes/index.js");
// import all available routes in our /routes/index.js the user can use

//********************* */
//* MIDDLEWARE
//********************* */
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(express.urlencoded({extended: true}))
app.use(express.json()); // parse json bodies

//********************* */
//*TEST ROUTE
//********************* */
app.get("/", (req, res) => {
  res.send("hello skeleton");
});
// test route

//********************* */
//* ROUTES
//********************* */
app.use("/", routes);
// check the routes index.js for ALL routes
//! (how requests hit server) server.js -> /routes/index.js -> /controllers/index.js -> /models/index.js
app.use((req, res) => {
  res.status(404).json({ message: "NOT A PROPER ROUTE" });
});
// catch all 404 route!

//********************* */
//*LISTENER
//********************* */
app.listen(PORT, () =>
  console.log(`listening to backend MERN skeleton: port ${PORT}`)
);