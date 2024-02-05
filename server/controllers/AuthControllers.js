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
  // Fonction pour la connexion de l'utilisateur
  async login(req, res) {
    try {
      const { email, password } = req.body;

      // Vérifier si l'utilisateur existe
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Identifiants invalides.' });
      }

      // Vérifier le mot de passe
    //   const passwordMatch = await bcrypt.compare(password, user.password);
    //   if (!passwordMatch) {
    //     return res.status(401).json({ message: 'Identifiants invalides.' });
    //   }

      // Générer un token JWT
      
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erreur lors de la connexion.' });
    }
  },
  

  
};

module.exports = AuthController;
