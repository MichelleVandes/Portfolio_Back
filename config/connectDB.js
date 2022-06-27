const mongoose = require("mongoose");

mongoose
  .connect(`mongodb+srv://${process.env.MONGODB_CONNECT}@clustermichellevandesch.1mbbc.mongodb.net/portfolio`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected on MongoDB"))
  .catch((err) => console.log("Impossible de se connecter à MongoDB", err));
