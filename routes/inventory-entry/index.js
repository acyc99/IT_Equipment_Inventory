const express = require("express");
const router = express.Router();
const { ITEquipment } = require('../../controllers');

router.get('/', (req, res) => {
    res.render('inventory-entry');
});

router.post('/check-work-order', async (req, res) => {
  const { ITEquipmentWO } = req.body;

  try {
    // Check if the work order number already exists
    const workOrderExists = await ITEquipment.checkWorkOrderExists(ITEquipmentWO);

    res.status(200).json({ exists: workOrderExists });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

router.post('/', async (req, res) => {

  try {
    // Check if the work order number already exists
    const { success } = await ITEquipment.saveDataToDB(req, res);

    if (success) {
      return res.redirect('/submission-result?success=true');
    } else {
      return res.redirect('/submission-result?success=false');
    }
  } catch (error) {
    console.error(error);
    return res.redirect('/submission-result?success=false');
  }
});

module.exports = router;

// return res.status(200).json({ exists: true, message: 'The work order number is duplicated and cannot be saved to the database!' });
// const savedData = await ITEquipment.saveDataToDB(req, res);
// res.status(200).json({ exists: false, savedData, message: 'Form submitted successfully!' });
// res.status(500).json({ error: 'An error occurred' });
