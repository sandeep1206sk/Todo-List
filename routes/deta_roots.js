const express = require('express');
const { add_data, getall_data, } = require('../data_controller/deta_controller');



const router = express.Router();

router.post('/add',add_data)
router.get('/getdata',getall_data)


module.exports = router;