const express = require("express");
const app = express();
const userRoutes = require("./routes/user.routes");
const projectRoutes = require("./routes/projects.routes");
const path = require('path')
require("dotenv").config();
require("./connectDb");



// config générale :
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('images/', express.static(path.join(__dirname, 'images')));


// Routes
// app.use("/user", userRoutes);
app.use("/project", projectRoutes); 

// Si route inconnue : 
app.use((req, res) => {
  console.log(req.url, req.body);
  res.status(404);
  res.json("Oups, Page not found");
});

// Connexions 
app.listen(process.env.PORT, () => {
    console.log('le serveur est lancé sur le port ', process.env.PORT)
})


