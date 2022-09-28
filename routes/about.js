let express = require('express')
let router = express.Router();

const aboutController = require('../controllers/aboutController')

router.get('/',aboutController.index)

module.exports = router;