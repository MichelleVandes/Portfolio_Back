const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    userName: {type: string,},
    password: {type: string, }
})


// validation par bcrypt :
userModel.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userModel.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};


// validation par bcrypt :
User.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};
// export du module, pour le document user :
modules.export = mongoose.model("user", userModel)