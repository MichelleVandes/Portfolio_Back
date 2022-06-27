const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config/.env" });
require("./config/connectDB")
const projectsRoutes = require('./routes/projects.routes')
const userRoutes = require('./routes/user.routes')

// Config générale
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//  app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
//   next()
// })  -> inutile car la config par défaut de cors est suffisant actuellement


   // Routes
   // app.use("/login", (req, res) => {
   //   res.send({
   //     token: "test123",
   //   });
   // });

   app.use("/portfolio/user", userRoutes);
app.use("/portfolio/project", projectsRoutes);

// Si route inconnue :
app.use((req, res) => {
  console.log(req.url, req.body);
  res.status(404);
  res.json("Oups, Page not found");
});

// server

app.listen(process.env.PORT, () => {
  console.log(`Connected on port ${process.env.PORT}`);
});
