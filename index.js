const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.get("/", function (req, res) {
    // res.send("Hello World!");
    res.render("index", { title: "About dogs", message: "Dogs rock!" });
});

app.use('/static', express.static('static'));


app.set("views", path.join(__dirname, "/src/views"));
app.set('view engine', 'ejs');
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});