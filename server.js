// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");

// SET UP EXPRESS APP
var app = express();
var PORT = 3000;

// SET UP MIDDLE WEAR
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// =========================
// ROUTER
// ==========================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});