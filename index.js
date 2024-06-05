const express = require("express");
require('dotenv').config();

const database = require("./config/database");
database.connect();

const routeClient = require("./routes/client/index.route")

const app = express();
const port = process.env.port;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static('public'));

routeClient.index(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

