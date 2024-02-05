const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/UserModel');
const config = require('../config');

const AuthController = {
  // Fonction pour l'inscription d'un nouvel utilisateur
  async register(req, res) {
    try {
      const { username, email, password } = req.body;

      // Vérifier si l'utilisateur existe déjà
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Cet utilisateur existe déjà.' });
      }

      // Hacher le mot de passe
      const hashedPassword = await bcrypt.hash(password, 10);

      // Créer un nouvel utilisateur
      const newUser = new UserModel({
        username,
        email,
        password: hashedPassword,
        roles: ['user'], // Assigner un rôle par défaut
      });

      // Sauvegarder l'utilisateur dans la base de données
      await newUser.save();

      // Générer un token JWT pour l'utilisateur
      const token = jwt.sign({ userId: newUser._id, username: newUser.username }, config.jwtSecret, { expiresIn: '1h' });

      // Retourner la réponse avec le token et les détails de l'utilisateur
      res.status(201).json({
        message: 'Utilisateur enregistré avec succès',
        token,
        user: {
          userId: newUser._id,
          username: newUser.username,
          email: newUser.email,
          roles: newUser.roles,
        },
      });

    } catch (error) {
      console.error('Erreur lors de l\'inscription :', error);
      res.status(500).json({ message: 'Erreur lors de l\'inscription.' });
    }
  },
};

module.exports = AuthController;
