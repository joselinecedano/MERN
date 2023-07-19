const router = require('express').Router()
const skeletonRoute = require('./skeletonRoutes.js')
    // import the skeleton routing js page

router.use('/skeleton', skeletonRoute)
    // any url beginning in /skeleton will be directed to ./skeletonRoutes and then use the request's HTTP method sent

module.exports= router