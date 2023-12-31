// Save IT Inventory Data to Database 

const { models: { User, IT_Equip_WO, Laptop, Monitor, Docking_Station, Adaptor, Mouse, Keyboard, Lock, Other_Equipment, Cell_Phone_WO, Cell_Phone, Note } } = require('../models');

module.exports = {
  checkWorkOrderExists: async(workOrderNumber) => {
    try {
      const existingWorkOrders = await IT_Equip_WO.findAll({
        where: { equip_work_order: workOrderNumber }
      });
      return existingWorkOrders.length > 0; 
    } catch (error) {
      console.error(error); 
      throw new Error("An error occurred while checking the work order number existence")
    }
  },

  checkPhoneWorkOrderExists: async(phoneWorkOrderNumber) => {
    try {
      const existingPhoneWorkOrders = await Cell_Phone_WO.findAll({
        where: { phone_work_order: phoneWorkOrderNumber }
      }); 
      return existingPhoneWorkOrders.length > 0; 
    } catch (error) {
      console.error(error); 
      throw new Error("An error occurred while checking the work order number existence")
    }
  },

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
      phoneAssetTag, phoneBrand, otherPhoneBrand, phoneModel, otherPhoneModel, phoneIMEI, phoneNumber,
      notes
    } = req.body;
    
    let itEquipmentSuccess = false; 
    let phoneSuccess = false;

    let itEquipmentWorkOrderExists;
    let phoneWorkOrderExists

    if (ITEquipmentWO === '') {
      itEquipmentSuccess = undefined;
    } else if (ITEquipmentWO) {
      itEquipmentWorkOrderExists = await module.exports.checkWorkOrderExists(ITEquipmentWO);
    }

    if (PhoneWO === '') {
      phoneSuccess = undefined;
    } else if (PhoneWO) {
      phoneWorkOrderExists = await module.exports.checkPhoneWorkOrderExists(PhoneWO);
    }

    if (itEquipmentWorkOrderExists) {
      itEquipmentSuccess = false;
    }

    if (phoneWorkOrderExists) {
      phoneSuccess = false;
    }
    
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
        

        // False to itEquipmentWorkOrderExists 
        if (!itEquipmentWorkOrderExists && ITEquipmentWO) {
    
          const itPickUpDate = ITEquipmentPickUpDate ? new Date(ITEquipmentPickUpDate) : null;
        
          const itEquipmentWO = await IT_Equip_WO.create({
            user_id: users.user_id,
            equip_work_order: ITEquipmentWO,
            equip_pickup_date: itPickUpDate
          });
        
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
          
          if (itEquipmentWO && itEquipmentWO.it_equip_wo_id != null) {
            const mice = await Mouse.create({
              it_equip_wo_id: itEquipmentWO.it_equip_wo_id,
              mouse_available: mouseAvailable  
            });
          }
          
          if (itEquipmentWO && itEquipmentWO.it_equip_wo_id != null) {
            const keyboards = await Keyboard.create({
              it_equip_wo_id: itEquipmentWO.it_equip_wo_id,
              keyboard_available: keyboardAvailable
            });
          }
          
          if (itEquipmentWO && itEquipmentWO.it_equip_wo_id != null) {
            const locks = await Lock.create({
              it_equip_wo_id: itEquipmentWO.it_equip_wo_id,
              lock_available: lockAvailable
            });
          }
          
          if (ITEquipmentName) {
            const otherEquips = await Other_Equipment.create({
              it_equip_wo_id: itEquipmentWO.it_equip_wo_id,
              other_equip_name: ITEquipmentName,
              other_equip_asset_tag: equipmentAssetTag,
              other_equip_serial_no: equipmentSerialNumber,
              other_equip_brand_model: equipModelBrand
            });
          }

          itEquipmentSuccess = true; 
        }

        if (!phoneWorkOrderExists && PhoneWO) {

          const cellPickUpDate = phonePickUpDate ? new Date(phonePickUpDate) : null;
    
          const cellPhoneWO = await Cell_Phone_WO.create({
            user_id: users.user_id,
            phone_work_order: PhoneWO, 
            phone_pickup_date: cellPickUpDate
          });
          
          if (phoneAssetTag) {
            const phones = await Cell_Phone.create({
              phone_wo_id: cellPhoneWO.phone_wo_id,
              phone_asset_tag: phoneAssetTag,
              phone_imei: phoneIMEI,
              phone_no: phoneNumber,
              phone_brand: phoneBrand,
              phone_model: phoneModel,
              other_phone_brand: otherPhoneBrand,
              other_phone_model: otherPhoneModel
            });
          }
  
          phoneSuccess = true; 
        }
  
        if (notes && notes.trim() !== "") {
          const comment = await Note.create({
            user_id: users.user_id,
            note_info: notes 
          });
        }
          
        return { itEquipmentSuccess, phoneSuccess };
      } catch (error) {
        console.error("Error adding data to the database:", error);
        return { itEquipmentSuccess: false, phoneSuccess: false }; 
      }
    } else {
      return { itEquipmentSuccess: false, phoneSuccess: false }; 
    }
  },

  // retrieveDataFromDB: async(req, res) => {
  //   const 
  // }
}  