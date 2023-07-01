const dbConfig = require('../config/db-config');
const Sequelize = require("sequelize");

// Database Connection (dbConfig Object configures the DB connection)
const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    logging: true 
}); 

const db = {};
db.sequelize = sequelize; // Assigns the Sequelize instance 
db.models = {}; // Empty Object to Store Tables 
// Set up the `db` object to store the Sequelize instance and references to the database models 
const { User, IT_Equip_WO, Laptop, Monitor, Docking_Station, Adaptor, Mouse, Keyboard, Lock, Other_Equipment, Cell_Phone_WO, Cell_Phone, Note} = require('./it-equipment')(sequelize, Sequelize.DataTypes);
db.models.User = User;
db.models.IT_Equip_WO = IT_Equip_WO;
db.models.Laptop = Laptop; 
db.models.Monitor = Monitor; 
db.models.Docking_Station = Docking_Station; 
db.models.Adaptor = Adaptor; 
db.models.Mouse = Mouse; 
db.models.Keyboard = Keyboard; 
db.models.Lock = Lock; 
db.models.Other_Equipment = Other_Equipment; 
db.models.Cell_Phone_WO = Cell_Phone_WO; 
db.models.Cell_Phone = Cell_Phone; 
db.models.Note = Note; 

// sequelize.sync({ force: true }) // Pass { force: true } to drop the table if it already exists
//     .then(() => {
//         console.log('Table created successfully');
//         // Proceed with your application logic here
//     })
//     .catch(error => {
//         console.error('Error creating table:', error);
//     });

module.exports = db; 