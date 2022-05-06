const mongoose = require("mongoose");
const { findByIdAndUpdate } = require("../models/model.project");
const ProjectMdl = require('../models/model.project');
const { param } = require("../routes/projects.routes");



exports.createProject = (req, res, next) => {
const projectObject = JSON.parse(req.body.project)
console.log(req.body.project);

  delete projectObject._id;
  const project = new ProjectMdl({
    ...projectObject,
    imageUrl: `${req.protocole}://${req.get('host')}/images/${req.file.filename}`
  });
  project
    .save()
    .then(() => res.status(201).json({ message: `Projet enregistré`}))
    .catch((error) => res.status(494).json({ error }));
};



exports.updateProject = async (req, res, next) => {
    ProjectMdl.findByIdAndUpdate(
      req.params._id,
      { ...req.body, _id: req.params._id }
    //   ,
    //   { new: true }
    )
      .then(() => res.status(200).json({ message: "Projet modifié" }))
      .catch((error) => res.status(500).jon({error}));

};

exports.findProjects = async (req, res, next) => {
  ProjectMdl.find()
    .then((ProjectMdl) => res.status(200).json(ProjectMdl))
    .catch((error) => res.status(400).json({ error }));
};

exports.findOneProject = async (req, res, next) => {

  ProjectMdl.findById(req.params._id)
    .then((ProjectMdl) => res.status(200).json(ProjectMdl))
    .catch((error) => res.status(400).json({ error }));
};