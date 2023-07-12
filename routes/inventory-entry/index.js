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
    const itEquipmentWorkOrderExists = await ITEquipment.checkWorkOrderExists(ITEquipmentWO);

    res.status(200).json({ exists: itEquipmentWorkOrderExists });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

router.post('/check-phone-work-order', async (req, res) => {
  const { PhoneWO } = req.body;

  try {
    // Check if the work order number already exists
    const phoneWorkOrderExists = await ITEquipment.checkPhoneWorkOrderExists(PhoneWO);

    res.status(200).json({ exists: phoneWorkOrderExists });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
})

// router.post('/', async (req, res) => {

//   try {
//     // Check if the work order number already exists
//     const { itEquipmentSuccess, phoneSuccess } = await ITEquipment.saveDataToDB(req, res);

//     if (itEquipmentSuccess && phoneSuccess) {
//       return res.redirect('/submission-result?success=true');
//     } else {
//       return res.redirect('/submission-result?success=false');
//     }
//   } catch (error) {
//     console.error(error);
//     return res.redirect('/submission-result?success=false');
//   }
// });

// router.post('/', async (req, res) => {
//   try {
//     // Bolean returned to check whether the work order number entered is already in the database 
//     const { itEquipmentSuccess, phoneSuccess } = await ITEquipment.saveDataToDB(req, res);
//     console.log(itEquipmentSuccess); 
//     return res.redirect(`/submission-result?itEquipmentSuccess=${itEquipmentSuccess}&phoneSuccess=${phoneSuccess}`);
//   } catch (error) {
//     console.error(error);
//     return res.redirect('/submission-result?itEquipmentSuccess=false&phoneSuccess=false');
//   }
// });

// router.post('/', async (req, res) => {
//   try {
//     // Bolean returned to check whether the work order number entered is already in the database 
//     const { itEquipmentSuccess, phoneSuccess } = await ITEquipment.saveDataToDB(req, res);
//     console.log(itEquipmentSuccess);
//     const itSuccess = itEquipmentSuccess.toString();
//     const pSuccess = phoneSuccess.toString();
//     return res.redirect(`/submission-result?itEquipmentSuccess=${itSuccess}&phoneSuccess=${pSuccess}`);
//   } catch (error) {
//     console.error(error);
//     return res.redirect('/submission-result?itEquipmentSuccess=false&phoneSuccess=false');
//   }
// });

// router.post('/', async (req, res) => {
//   try {
//     // Boolean returned to check whether the work order number entered is already in the database 
//     const { itEquipmentSuccess, phoneSuccess } = await ITEquipment.saveDataToDB(req, res);
//     console.log(itEquipmentSuccess);
//     return res.redirect(`/submission-result?itEquipmentSuccess=${itEquipmentSuccess}&phoneSuccess=${phoneSuccess}`);
//   } catch (error) {
//     console.error(error);
//     return res.redirect('/submission-result?itEquipmentSuccess=false&phoneSuccess=false');
//   }
// });

// router.post('/', async (req, res) => {
//   try {
//     const { itEquipmentSuccess, phoneSuccess } = await ITEquipment.saveDataToDB(req, res);
//     const itSuccess = itEquipmentSuccess.toString();
//     const pSuccess = phoneSuccess.toString(); 
//     // const itSuccess = itEquipmentSuccess ? 'true' : 'false';
//     // const pSuccess = phoneSuccess ? 'true' : 'false';
//     console.log(itSuccess);
//     console.log(pSuccess); 
//     return res.redirect(`/submission-result?itEquipmentSuccess=${itSuccess}&phoneSuccess=${pSuccess}`);
//   } catch (error) {
//     console.error(error);
//     return res.redirect('/submission-result?itEquipmentSuccess=false&phoneSuccess=false');
//   }
// });


// router.post('/', async (req, res) => {
//   try {
//     let { itEquipmentSuccess, phoneSuccess } = await ITEquipment.saveDataToDB(req, res);
//     itEquipmentSuccess = itEquipmentSuccess ? 'true' : 'false';
//     phoneSuccess = phoneSuccess ? 'true' : 'false';
//     console.log(itEquipmentSuccess);
//     console.log(phoneSuccess); 
//     return res.render(`/submission-result?itEquipmentSuccess=${itEquipmentSuccess}&phoneSuccess=${phoneSuccess}`);
//   } catch (error) {
//     console.error(error);
//     return res.render(`/submission-result?itEquipmentSuccess=false&phoneSuccess=false`);
//   }
// });


// router.post('/', async (req, res) => {
//   try {
//     const { itEquipmentSuccess, phoneSuccess } = await ITEquipment.saveDataToDB(req, res);
//     const queryParameters = new URLSearchParams({ itEquipmentSuccess, phoneSuccess }).toString();
//     return res.redirect(`/submission-result?${queryParameters}`);
//   } catch (error) {
//     console.error(error);
//     return res.redirect('/submission-result?itEquipmentSuccess=false&phoneSuccess=false');
//   }
// });


// return res.status(200).json({ exists: true, message: 'The work order number is duplicated and cannot be saved to the database!' });
// const savedData = await ITEquipment.saveDataToDB(req, res);
// res.status(200).json({ exists: false, savedData, message: 'Form submitted successfully!' });
// res.status(500).json({ error: 'An error occurred' });


// router.post('/', async (req, res) => {
//   try {
//     const { itEquipmentSuccess, phoneSuccess } = await ITEquipment.saveDataToDB(req, res);
//     return res.render('submission-result', { itEquipmentSuccess, phoneSuccess });
//   } catch (error) {
//     console.error(error);
//     return res.redirect('/submission-result?itEquipmentSuccess=false&phoneSuccess=false');
//   }
// });

// Inside ITEquipment.js or routes.js

router.post('/', async (req, res) => {
  try {
    const { itEquipmentSuccess, phoneSuccess } = await ITEquipment.saveDataToDB(req, res);
    const itSuccess = itEquipmentSuccess.toString();
    const pSuccess = phoneSuccess.toString(); 
    console.log(itEquipmentSuccess);
    console.log(phoneSuccess);
    return res.redirect(`/submission-result?itEquipmentSuccess=${itSuccess}&phoneSuccess=${pSuccess}`);
  } catch (error) {
    console.error(error);
    return res.redirect('/submission-result?itEquipmentSuccess=false&phoneSuccess=false');
  }
});


module.exports = router;
