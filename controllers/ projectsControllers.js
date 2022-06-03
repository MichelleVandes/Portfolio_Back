const mongoose = require("mongoose");
const modelProject = require("../models/model.project");
const { findByIdAndUpdate } = require("../models/model.project");
const ProjectMdl = require('../models/model.project');
const { param } = require("../routes/projects.routes");



exports.createProject = (req, res, next) => {
  console.log(req.body);
  // const projectObject = JSON.parse(req.body.project)
  // console.log(req.body.project);

  //   delete projectObject._id;
  //   const project = new ProjectMdl({
  //     ...projectObject,
  //     imageUrl: `${req.protocole}://${req.get('host')}/images/${req.file.filename}`
  //   });
  //   project
  //     .save()
  //     .then(() => res.status(201).json({ message: `Projet enregistré`}))
  //     .catch((error) => res.status(494).json({ error }));
  // récup des données dans body
  const { title, description } = req.body;
  const project = new ProjectMdl({ title, description });
  project
        .save()
        .then(() => res.status(201).json({ message: "Projet créé !" }))
        .catch((error) => res.status(400).json({ error }));
 
};



exports.updateProject = async (req, res, next) => {
  console.log("req :", req.body, "id :", req.params._id);
    ProjectMdl.findByIdAndUpdate(
      req.params._id,
      { ...req.body, _id: req.params._id }
    //   ,
    //   { new: true }
    )
      .then(() => res.status(200).json({ message: "Projet modifié" }))
      .catch((error) => res.status(500).jon({error}));

};

exports.deleteProject = async (req, res, next) => {
  ProjectMdl.findByIdAndDelete(
    req.params._id,
    { ...req.body, _id: req.params._id }

  )
    .then(() => res.status(200).json({ message: "Projet supprimé" }))
    .catch((error) => res.status(500).jon({ error }));
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