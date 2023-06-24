const express = require("express");
const app = express();

const path = require("path");
const mime = require("mime-types"); 

const saveToDB = require("./controllers/index")

const db = require('./models');

(async () => {
    await db.sequelize.sync();
})();

const inventoryEntry = require('./routes/inventory-entry')
const inventorySubmit = require('./routes/submit-inventory-form')

app.set("view engine", "pug")
app.set("views", path.join(__dirname, 'views'))


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
// app.use(session({
//     secret: "secret",
//     cookie: {
//         sameSite: "strict"
//     }
// })); 

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/inventory-entry', inventoryEntry);
app.use('/inventory-submit', inventorySubmit);

// (async () => {
//     await db.sequelize.sync();
// })(); 

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

// app.post('/submit-inventory-form', (req, res) => {
// });

app.listen(9999); 