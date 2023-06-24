// Save IT Inventory Data to Database 

const { models: { User, IT_Equip_WO, Laptop, Monitor, Docking_Station, Adaptor, Mouse, Keyboard, Lock, Other_Equipment, Cell_Phone_WO, Cell_Phone } } = require('../models');

module.exports = {
  saveDataToDB: async (req, res) => {
    console.log(req.body); 
    const { fullName, firstName, middleName, lastName, branchSection, officeNumber, telNumber, email, 
            ITEquipmentWO, ITEquipmentPickUpDate, 
            laptopAssetTag, laptopSerialNumber, laptopBrand, otherLaptopBrand, laptopModel, otherLaptopModel,
            monitor1AssetTag, monitor1SerialNumber, monitor1Brand, otherMonitor1Brand, monitor1Model, otherMonitor1Model,
            monitor2AssetTag, monitor2SerialNumber, monitor2Brand, otherMonitor2Brand, monitor2Model, otherMonitor2Model,
            dockingStationAssetTag, dockingStationBrandModel, otherDockBrandModel, 
            adaptorAssetTag, adaptorBrandModel, otherAdaptorBrandModel,
            ITEquipmentName, equipmentAssetTag, equipmentSerialNumber, equipModelBrand,
            PhoneWO, phonePickUpDate, 
            phoneAssetTag, phoneBrand, otherPhoneBrand, phoneModel, otherPhoneModel, phoneIMEI, phoneNumber
          
          } = req.body;
    
    if (req.body.firstName && req.body.lastName) {
      try {
        const users = await User.create({
          full_name: fullName, 
          first_name: firstName,
          middle_name: middleName,
          last_name: lastName,
          branch_section: branchSection,
          office_no: officeNumber,
          telephone_no: telNumber,
          email: email
        });

        const itEquipmentWO = await IT_Equip_WO.create({
          user_id: users.user_id,
          equip_work_order: ITEquipmentWO,
          equip_pickup_date: ITEquipmentPickUpDate
        });

        res.send("Data successfully added to the database!");
      } catch (error) {
        console.error("Error adding data to the database:", error);
        res.status(500).send("An error occurred while adding data to the database.");
      }
    } else {
      res.send("Not added to the database!");
    }
  },
};


// module.exports = {
    
//     saveDatatoDB: async (req, res) => {
//         // console.log(req.body); 
//         if (req.body.firstName && req.body.lastName) {
//             const {firstName, middleName, lastName, branchSection, officeNumber, telNumber, email} = req.body;
//             await User.create({
//                 firstName, 
//                 middleName,
//                 lastName,
//                 branchSection,
//                 officeNumber, 
//                 telNumber, 
//                 email
//             }); 
//             res.send("Data successfully added to the database!")
//         } else {
//             res.send("Not added to the database!"); 
//         }
//     },
// }; 
