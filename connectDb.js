const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(process.env.MONGODB_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log('Connecté à MongoDB'))
.catch((err) => console.log('Impossible de se connecter', err));
