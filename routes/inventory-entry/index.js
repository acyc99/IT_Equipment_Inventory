const express = require("express");
const router = express.Router();
const { ITEquipment } = require('../../controllers'); 

router.get('/', (req, res) => {
    res.render('inventory-entry')
});

router.post('/', ITEquipment.saveDataToDB);

module.exports = router; 