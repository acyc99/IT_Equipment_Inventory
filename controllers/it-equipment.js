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
            mouseAvailable, keyboardAvailable, lockAvailable,
            ITEquipmentName, equipmentAssetTag, equipmentSerialNumber, equipModelBrand,
            PhoneWO, phonePickUpDate, 
            phoneAssetTag, phoneBrand, otherPhoneBrand, phoneModel, otherPhoneModel, phoneIMEI, phoneNumber
          } = req.body;
    
    if (firstName && lastName) {
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

        let itEquipmentWO; 
        let cellPhoneWO;

        if (ITEquipmentWO) {
          const itPickUpDate = ITEquipmentPickUpDate ? new Date(ITEquipmentPickUpDate) : null;
  
          itEquipmentWO = await IT_Equip_WO.create({
            user_id: users.user_id,
            equip_work_order: ITEquipmentWO,
            equip_pickup_date: itPickUpDate
          });
        }

        if (PhoneWO) {
          const cellPickUpDate = phonePickUpDate ? new Date(phonePickUpDate) : null;
  
          cellPhoneWO = await Cell_Phone_WO.create({
            user_id: users.user_id,
            phone_work_order: PhoneWO, 
            phone_pickup_date: cellPickUpDate
          });
        }

        if (laptopAssetTag) {
          const laptops = await Laptop.create({
            it_equip_wo_id: itEquipmentWO.it_equip_wo_id,
            laptop_asset_tag: laptopAssetTag,
            laptop_serial_no: laptopSerialNumber,
            laptop_brand: laptopBrand,
            laptop_model: laptopModel,
            other_laptop_brand: otherLaptopBrand,
            other_laptop_model: otherLaptopModel
          });
        }

        if (monitor1AssetTag) {
          const monitors1 = await Monitor.create({
            it_equip_wo_id: itEquipmentWO.it_equip_wo_id,
            monitor_asset_tag: monitor1AssetTag,
            monitor_serial_no: monitor1SerialNumber,
            monitor_brand: monitor1Brand,
            monitor_model: monitor1Model,
            other_monitor_brand: otherMonitor1Brand,
            other_monitor_model: otherMonitor1Model
          });
        }

        if (monitor2AssetTag) {
          const monitors2 = await Monitor.create({
            it_equip_wo_id: itEquipmentWO.it_equip_wo_id,
            monitor_asset_tag: monitor2AssetTag,
            monitor_serial_no: monitor2SerialNumber,
            monitor_brand: monitor2Brand,
            monitor_model: monitor2Model,
            other_monitor_brand: otherMonitor2Brand,
            other_monitor_model: otherMonitor2Model
          });
        }

        if (dockingStationAssetTag) {
          const dockStations = await Docking_Station.create({
            it_equip_wo_id: itEquipmentWO.it_equip_wo_id,
            dock_asset_tag: dockingStationAssetTag,
            dock_brand_model: dockingStationBrandModel,
            other_dock_brand_model: otherDockBrandModel
          });
        }

        if (adaptorAssetTag) {
          const adaptors = await Adaptor.create({
            it_equip_wo_id: itEquipmentWO.it_equip_wo_id,
            adaptor_asset_tag: adaptorAssetTag,
            adaptor_brand_model: adaptorBrandModel,
            other_adaptor_brand_model: otherAdaptorBrandModel
          });
        }

        if (mouseAvailable) {
          const mice = await Mouse.create({
            it_equip_wo_id: itEquipmentWO.it_equip_wo_id,
            mouse_available: mouseAvailable  
          });
        }

      if (keyboardAvailable) {
        const keyboards = Keyboard.create({
          it_equip_wo_id: itEquipmentWO.it_equip_wo_id,
          keyboard_available: keyboardAvailable
        });
      }

      if (lockAvailable) {
        const locks = Lock.create({
          it_equip_wo_id: itEquipmentWO.it_equip_wo_id,
          lock_available: lockAvailable
        });
      }

      if (ITEquipmentName) {
        const otherEquips = Other_Equipment.create({
          it_equip_wo_id: itEquipmentWO.it_equip_wo_id,
          other_equip_name: ITEquipmentName,
          other_equip_asset_tag: equipmentAssetTag,
          other_equip_serial_no: equipmentSerialNumber,
          other_equip_brand_model: equipModelBrand
        });
      }



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
