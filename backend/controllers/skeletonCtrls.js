const { del } = require("express/lib/application");
const db = require("../models");
// this is where our db mongoose connection lives as well as our models

//***************** */
//* INDEX ROUTE
//***************** */
const getBones = (req, res) => {
  // res.send('getBones')
  db.Skeleton.find({}).then((foundBones) => {
    if (!foundBones) {
      res.status(404).json({ message: "CANNOT FIND BONES" });
    } else {
      res.status(200).json({ data: foundBones, message: "FOUND BONES" });
    }
  });
};

//***************** */
//* SHOW ROUTE
//***************** */
const showBones = (req,res)=> {
    db.Skeleton.findById(req.params.id)
    .then((foundBones)=>{
        if(!foundBones){
            res.status(404).json({message: "COULD NOT FIND BONES"})
        }else{
            res.status(200).json({data: foundBones, message:"FOUND BONES (SHOW)"})
        }
    })
}

//***************** */
//* CREATE ROUTE
//***************** */
const createBones = (req, res) => {
  // res.send('createBones')
  db.Skeleton.create(req.body).then((createdBones) => {
    if (!createBones) {
      res.status(400).json({ message: "CANNOT CREATE BONES" });
    } else {
      res.status(200).json({ data: createBones, message: "BONES CREATED" });
    }
  });
};

//***************** */
//* UPDATE ROUTE
//***************** */
const updateBones = (req, res) => {
  db.Skeleton.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updatedBones) => {
      if (!updateBones) {
        res.status(404).json({ message: "COULD NOT UPDATE BONES" });
      } else {
        res.status(200).json({ data: updatedBones, message: "UPDATED BONES" });
      }
    }
  );
};

//***************** */
//* DESTROY ROUTE
//***************** */
const deleteBones = (req, res) => {
  db.Skeleton.findByIdAndDelete(req.params.id).then((deletedBones) => {
    if (!deletedBones) {
      res.status(404).json({ message: "COULD NOT DELETE BONES" });
    } else {
      res.status(200).json({ data: deletedBones, message: "BONES DELETED" });
    }
  });
};

module.exports = {
  getBones,
  showBones,
  createBones,
  updateBones,
  deleteBones
};