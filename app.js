const express = require("express");
const app = express();

const path = require("path");
const mime = require("mime-types"); 
const mysql = require("mysql2/promise");

const dbConnection = require('./config/db-config');
const db = require('./models');

(async () => {
    await db.sequelize.sync();
})();

const inventoryEntry = require('./routes/inventory-entry')
// const inventorySubmit = require('./routes/submit-inventory-form') // Not necessary 
// const checkWorkOrderEntry = require('./routes/check-work-order') // Testing 

app.set("view engine", "pug")
app.set("views", path.join(__dirname, 'views'))


app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/inventory-entry', inventoryEntry);
// app.use('/inventory-submit', inventorySubmit); // Not necessary 
// app.use('/check-work-order', checkWorkOrderEntry); // Testing 

(async () => {
    await db.sequelize.sync();
})(); 

// Serve static files (CSS files) with appropriate MIME types 
app.use('/public', express.static(path.join(__dirname, 'public'), {
    setHeaders: (res, filePath) => {
        if (mime.lookup(filePath) === 'text/css') {
        res.setHeader('Content-Type', 'text/css');
        }
    },
}));

// Serve JavaScript file from Controllers folder 
app.use('/controllers', express.static(path.join(__dirname, 'controllers'), {
    setHeaders: (res, filePath) => {
        if(mime.lookup(filePath) === 'application/javascript') {
            res.setHeader('Content-Type', 'application/javascript'); 
        }
    }, 
}));

app.get('/', (req, res) => {
    res.send(`<h1>IT Equipment Inventory Project</h1>
            <h2>By Amanda Chang</h2>
            <p>Direct to Home Page via http://localhost:9999/inventory-entry</p>`)
});

// app.post('/inventory-entry', async (req, res) => {
//   const { ITEquipmentWO } = req.body;

//   try {
//     // Create a connection pool using the connection configuration
//     const pool = mysql.createPool(dbConnection);
//     const query = 'SELECT COUNT(*) AS count FROM it_equip_wo WHERE equip_work_order = ?';

//     // Use the pool to execute a query
//     // const [rows] = await pool.execute(query, [ITEquipmentWO]);
//     const [rows] = await pool.execute(query.replace('?', pool.escape(ITEquipmentWO)));
//     console.log('Rows:', rows);

//     const exists = rows[0].count > 0;
//     res.json({ exists });
//     // if (rows.length > 0) {
//     //   // Work order number already exists
//     //   // res.json({ exists: true });
//     //   res.json({ exists: true, count: rows[0].count });
//     // } else {
//     //   // Work order number doesn't exist
//     //   // res.json({ exists: false });
//     //   res.json({ exists: false, count: 0 });
//     // }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });

app.listen(9999, () => {
    console.log("Server is running on http://localhost:9999")
}); 