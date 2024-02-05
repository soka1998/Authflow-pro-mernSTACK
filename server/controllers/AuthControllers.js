const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/UserModel');
const config = require('../config');

const AuthController = {
  // Fonction pour l'inscription d'un nouvel utilisateur
  async register(req, res) {
    try {
      const { username, email, password } = req.body;

      // Créer un nouvel utilisateur
      const newUser = new UserModel({
        username,
        email,
        password: hashedPassword,
        roles: ['user'], // Assigner un rôle par défaut
      });

      // Sauvegarder l'utilisateur dans la base de données
      await newUser.save();

      return res.status(201).json({ message: 'Utilisateur enregistré avec succès.' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erreur lors de l\'enregistrement de l\'utilisateur.' });
    }
  },

  
};

module.exports = AuthController;
