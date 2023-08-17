# About IT Equipment Inventory Database Project 
A web application that  

[Watch Project Video](https://clipchamp.com/watch/E3ln4n9urXS)

## Check it Out 
1. Run `nodemon app.js`
2. Open a browser and type `localhost:9999/inventory-entry` or click on http://localhost:9999/inventory-entry

### Database Configuration File 
The **db-config.js** file is saved in **config** folder. </br>
The configuration file contains information to establish connection to the database. 
**it_equipment_inventory** is a database created in MySQL. 

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