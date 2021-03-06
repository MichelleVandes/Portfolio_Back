const User = require("../models/user.Model");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        pseudo: req.body.pseudo,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(200).json({ mesage: "Utilisateur créé" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  User.findOne({ pseudo: req.body.pseudo })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur inconnu" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect" });
          }
          // Utilisateur correct :
          res.status(200).json({
            userId: user._id,
            token: jsonwebtoken.sign(
              {
                userId: user._id,
              },
              "RANDOM_TOKEN_SECRET",
              { expiresIn: "3600s" }
            ),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
