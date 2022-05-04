var express = require("express");
var app = express();
var userRoutes = require("./routes/user.routes");
var projectRoutes = require("./routes/projects.routes");
require("dotenv").config();


// config générale :
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Routes
app.use("/user", userRoutes);
app.user("/project", projectRoutes); 

// Connexions 
app.listen(process.env.PORT, () => {
    console.log('le serveur est lancé sur le port ', process.env.PORT)
})


