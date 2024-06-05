const express = require("express");
require('dotenv').config();

const routeClient = require("./routes/client/index.route")

const app = express();
const port = process.env.port;

app.set("views", "./views");
app.set("view engine", "pug");

routeClient.index(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

