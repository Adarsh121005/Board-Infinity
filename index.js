const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const connectDB = require("./database");
const port = process.env.PORT || 8000;
const homeRoutes = require('./routers/routers');


console.log(process.env.DATABASE);

//Database connection

connectDB()
.catch(e => {
	console.log(e);
});


app.use(express.json());
//routes
app.use("/", homeRoutes);

app.listen(port, () => {
	console.log(`app is running at ${port}`);
});