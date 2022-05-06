const mongoose = require('mongoose');
const uniquevalidator = require('mongoose-unique-validator')

const projectSchema = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  imageUrl: { type: String},
},
{timestamps: true});

projectSchema.plugin(uniquevalidator)

module.exports = mongoose.model("Project", projectSchema);