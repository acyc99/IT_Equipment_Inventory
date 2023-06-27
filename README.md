# About IT Equipment Inventory Database Project 
A web application that  

## Check it Out 
1. Run `nodemon app.js`
2. Open a browser and type `localhost:9999/inventory-entry` or click on http://localhost:9999/inventory-entry

### db-config.js File (Personal Configuration File)
``` JavaScript
// Connect to Database 
module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DATABASE: 'it_equipment_inventory',
    DIALECT: 'mysql'
}
```

### Node Package Manager (npm) Used
* Express: `npm install express`
* Nodemon: `npm install nodemon`
* Pug: `npm install pug`
* Pug's Command Line Interface (CLI): `npm install -g pug-cli`
* Sequelize: `npm install sequelize`
* MySQL2: `npm install mysql2`