const { home, about, contactus, info } = require('../controllers/controllers.js')
const express = require('express')
const router = express.Router()

router.get('/home', home)
router.get('/about', about)
router.get('/contactUS', contactus)
router.get('/info', info)
module.exports = router