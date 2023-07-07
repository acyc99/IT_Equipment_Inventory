// const express = require("express");
// const router = express.Router();
// const { ITEquipment } = require('../../controllers'); 

// router.get('/', (req, res) => {
//     res.render('inventory-entry')
// });

// router.post('/check-work-order', ITEquipment.checkWorkOrderExists);
// router.post('/', ITEquipment.saveDataToDB);

// module.exports = router; 

const express = require("express");
const router = express.Router();
const { ITEquipment } = require('../../controllers');

router.get('/', (req, res) => {
    res.render('inventory-entry');
});

router.post('/', async (req, res) => {
  const { ITEquipmentWO } = req.body;

  try {
    // Check if the work order number already exists
    const workOrderExists = await ITEquipment.checkWorkOrderExists(ITEquipmentWO);

    if (workOrderExists) {
      // Work order number already exists, send an appropriate response
      return res.status(200).json({ exists: true });
    }

    // Work order number doesn't exist, proceed with saving the data
    const savedData = await ITEquipment.saveDataToDB(req.body);

    res.status(200).json({ exists: false, savedData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
