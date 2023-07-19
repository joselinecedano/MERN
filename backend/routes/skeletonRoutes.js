const router = require('express').Router();
const { skeletonCtrl } = require('../controllers');
const { updateBones } = require('../controllers/skeletonCtrls');
    // all functions/methods imported from skeleton's controller's index.js

//********************** */
//* ROUTES - METHODS
//********************** */
router.get('/', skeletonCtrl.getBones)
router.get('/:id', skeletonCtrl.showBones)
router.post('/', skeletonCtrl.createBones)
router.put('/:id', skeletonCtrl.updateBones)
router.delete('/:id', skeletonCtrl.deleteBones)

module.exports = router
    //!  exporting the routes to be used in /routes/index.js along with our controller methods