# About IT Equipment Inventory Database Project 
A web application that  

<div style="position:relative;width:fit-content;height:fit-content;">
    <a style="position:absolute;top:20px;right:1rem;opacity:0.8;" href="https://clipchamp.com/watch/E3ln4n9urXS?utm_source=embed&utm_medium=embed&utm_campaign=watch">
        <img loading="lazy" style="height:22px;" src="https://clipchamp.com/e.svg" alt="Made with Clipchamp" />
    </a>
    <iframe allow="autoplay;" allowfullscreen style="border:none" src="https://clipchamp.com/watch/E3ln4n9urXS/embed" width="640" height="360"></iframe>
</div>

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