const express = require("express");
const path = require("path");

const app = express();

const port = 3000;


// WEBSITE FILES
app.use(express.static(path.join(__dirname, "public")));


// API ROUTE
app.get('/api/getName', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json({ name: "AdvIP_Project" });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});