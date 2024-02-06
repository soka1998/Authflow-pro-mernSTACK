import  UserModel from '../models/UserModel';

// Defining the RoleController object that will contain methods for managing roles
const RoleController = {
  // Attribuer un rôle à un utilisateur
  async assignRole(req, res) {
    try {
      const { userId, roleName } = req.body;

       // Vérifier si l'utilisateur existe
       const user = await UserModel.findById(userId);
       if (!user) {
         return res.status(404).json({ message: 'Utilisateur non trouvé.' });
       }
       
       
      // Vérifier si le rôle existe déjà dans les rôles de l'utilisateur
      if (user.roles.includes(roleName)) {
        return res.status(400).json({ message: 'L\'utilisateur a déjà ce rôle.' });
      }
 

    }catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erreur lors de l\'attribution du rôle.' });
      }}}