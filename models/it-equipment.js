// Database Table Format 
// const { handleCheckboxSelection } = require('../public/js/main') 
// const nullDecision = handleCheckboxSelection();

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'users', // Table user 
        {   
            user_id: {
                type: DataTypes.INTEGER, 
                primaryKey: true,
                autoIncrement: true
            }, 
            // Table Column Name: Data Type 
            full_name: DataTypes.STRING, 
            first_name: DataTypes.STRING,
            middle_name: DataTypes.STRING,
            last_name: DataTypes.STRING,
            branch_section: DataTypes.STRING, 
            office_no: DataTypes.STRING,
            telephone_no: DataTypes.STRING, 
            email: DataTypes.STRING
        }, 
        {
            freezeTableName: true // Table Name same as Model Name 
        }); 

    const IT_Equip_WO = sequelize.define(
        'it_equip_wo',
        {   
            it_equip_wo_id: {
                type: DataTypes.INTEGER,
                primaryKey: true, 
                autoIncrement: true
            }, 
            equip_work_order: {
                type: DataTypes.STRING,
                allowNull: true 
            },
            equip_pickup_date: {
                type: DataTypes.DATE,
                allowNull: true
            }
        },
        {
            freezeTableName: true 
        });
    
    IT_Equip_WO.belongsTo(User, {
        foreignKey: 'user_id', // Specify the foreign key column name
        onDelete: 'CASCADE' // Deletion behavior (optional)
    });

    const Laptop = sequelize.define(
        'laptops', 
        {   
            laptop_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            laptop_asset_tag: DataTypes.INTEGER, 
            laptop_serial_no: DataTypes.STRING,
            laptop_brand: DataTypes.STRING,
            laptop_model: DataTypes.STRING,
            other_laptop_brand: DataTypes.STRING,
            other_laptop_model: DataTypes.STRING
        },
        {
            freezeTableName: true 
        }); 

    Laptop.belongsTo(IT_Equip_WO, {
        foreignKey: 'it_equip_wo_id',
        // allowNull: true, 
        onDelete: 'CASCADE'
    }); 
    
    const Monitor = sequelize.define(
        'monitors', 
        {
            monitor_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            monitor_asset_tag: DataTypes.INTEGER,
            monitor_serial_no: DataTypes.STRING,
            monitor_brand: DataTypes.STRING,
            monitor_model: DataTypes.STRING,
            other_monitor_brand: DataTypes.STRING,
            other_monitor_model: DataTypes.STRING
        }); 

    Monitor.belongsTo(IT_Equip_WO, {
        foreignKey: 'it_equip_wo_id',
        // allowNull: true, 
        onDelete: 'CASCADE'
    });

    const Docking_Station = sequelize.define(
        'docking_stations', 
        {
            docking_station_id: {
                type: DataTypes.INTEGER,
                primaryKey: true, 
                autoIncrement: true
            },
            dock_asset_tag: DataTypes.INTEGER,
            dock_brand_model: DataTypes.STRING,
            other_dock_brand_model: DataTypes.STRING
        });

    Docking_Station.belongsTo(IT_Equip_WO, {
        foreignKey: 'it_equip_wo_id',
        // allowNull: true, 
        onDelete: 'CASCADE'
    });

    const Adaptor = sequelize.define(
        'adaptors', 
        {
            adaptor_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            adaptor_asset_tag: DataTypes.INTEGER,
            adaptor_brand_model: DataTypes.STRING,
            other_adaptor_brand_model: DataTypes.STRING
        });

    Adaptor.belongsTo(IT_Equip_WO, {
        foreignKey: 'it_equip_wo_id',
        // allowNull: true, 
        onDelete: 'CASCADE'
    });

    const Mouse = sequelize.define(
        'mice',
        {
            mouse_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            mouse_available: DataTypes.STRING
        });

    Mouse.belongsTo(IT_Equip_WO, {
        foreignKey: 'it_equip_wo_id',
        // allowNull: true, 
        onDelete: 'CASCADE'
    });

    const Keyboard = sequelize.define(
        'keyboards',
        {
            keyboard_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            keyboard_available: DataTypes.STRING
        });

    Keyboard.belongsTo(IT_Equip_WO, {
        foreignKey: 'it_equip_wo_id',
        // allowNull: true, 
        onDelete: 'CASCADE'
    });

    const Lock = sequelize.define(
        'locks',
        {
            lock_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            lock_available: DataTypes.STRING
        });

    Lock.belongsTo(IT_Equip_WO, {
        foreignKey: 'it_equip_wo_id',
        // allowNull: true, 
        onDelete: 'CASCADE'
    });

    const Other_Equipment = sequelize.define(
        'other_equip',
        {
            other_equip_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            other_equip_name: DataTypes.STRING,
            other_equip_asset_tag: DataTypes.INTEGER,
            other_equip_serial_no: DataTypes.STRING,
            other_equip_brand_model: DataTypes.STRING
        });

    Other_Equipment.belongsTo(IT_Equip_WO, {
        foreignKey: 'it_equip_wo_id',
        allowNull: true, 
        onDelete: 'CASCADE'
    });

    const Cell_Phone_WO = sequelize.define(
        'cell_phone_wo',
        {
            phone_wo_id: {
                type: DataTypes.INTEGER,
                primaryKey: true, 
                autoIncrement: true
            },
            phone_work_order: DataTypes.STRING,
            phone_pickup_date: {
                type: DataTypes.DATE,
                allowNull: true
            }
        });

    Cell_Phone_WO.belongsTo(User, {
        foreignKey: 'user_id', 
        onDelete: 'CASCADE' 
    });

    const Cell_Phone = sequelize.define(
        'cell_phones', 
        {
            cell_phone_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            phone_asset_tag: DataTypes.INTEGER,
            phone_imei: DataTypes.STRING,
            phone_no: DataTypes.STRING,
            phone_brand: DataTypes.STRING,
            phone_model: DataTypes.STRING,
            other_phone_brand: DataTypes.STRING,
            other_phone_model: DataTypes.STRING
        });

    Cell_Phone.belongsTo(Cell_Phone_WO, {
        foreignKey: 'phone_wo_id', 
        onDelete: 'CASCADE' 
    });

    const Note = sequelize.define(
        'notes',
        {
            note_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            note_info: DataTypes.STRING
        }
    )

    Note.belongsTo(User, {
        foreignKey: 'user_id', // Specify the foreign key column name
        onDelete: 'CASCADE' // Deletion behavior (optional)
    });

    return {User, IT_Equip_WO, Laptop, Monitor, Docking_Station, Adaptor, Mouse, Keyboard, Lock, Other_Equipment, Cell_Phone_WO, Cell_Phone, Note}; 
}; 