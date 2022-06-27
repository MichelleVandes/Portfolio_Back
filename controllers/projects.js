const Project = require('../models/project.Model')

// export des projets en consultation : GET
exports.allPjts = (req, res, next) => {
Project.find()
.then((projets) => res.status(200).json(projets))
.catch((error) => res.status(500).json(error))
};

exports.findOnePjt = (req, res, next) => {
    Project.findById(req.params._id)
      .then((projets) => res.status(200).json(projets))
      .catch((error) => res.status(500).json(error));
};

// Création d'un projet POST
exports.newPjt = (req, res, next) => {

}

// Modif UPDATE
exports.updatePjt = (req, res, next) => {};

// Suppression DELETE
exports.deletePjt = (req, res, next) => {
        Project.findByIdAndDelete(req.params._id)
          .then((projets) => res.status(200).json({message: "Projet Supprimé"}))
          .catch((error) => res.status(500).json(error));
};