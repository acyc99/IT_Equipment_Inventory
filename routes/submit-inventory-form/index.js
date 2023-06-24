const express = require("express");
const router = express.Router();
const { itequipment } = require('../../controllers'); 

router.get('/', (req, res) => {
    res.render('inventory-entry')
});

module.exports = router; 