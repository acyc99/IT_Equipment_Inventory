# IT Equipment Inventory 

## Introduction 

[Watch Project Video](https://clipchamp.com/watch/E3ln4n9urXS)

### Technologies Used (Languages)
* Pug Template 
* Cascading Style Sheets (CSS)
* JavaScript (Node.js) - Express Server 
* MySQL and Sequalize 

## Features 

## Getting Started
1. Clone this IT_Equipment_Inventory repository: `git clone https://github.com/acyc99/IT_Equipment_Inventory.git`
2. Install the required JavaScript packages: <br/> 
    <!-- Node Package Manager (npm) -->
    * Express: `npm install express`
    * Nodemon: `npm install nodemon`
    * Pug: `npm install pug`
    * Pug's Command Line Interface (CLI): `npm install -g pug-cli`
    * Sequelize: `npm install sequelize`
    * MySQL2: `npm install mysql2`
3. Add a [database configuration file](#database-configuration-file) 
4. Run `nodemon app.js`
5. Open a browser and type `localhost:9999/inventory-entry` or click on http://localhost:9999/inventory-entry

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

## Reference 
* 