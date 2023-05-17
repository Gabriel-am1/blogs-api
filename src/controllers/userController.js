const userServices = require('../services/userService');

module.exports = {

  async getAllUser(_req, res, next) {    
  try {
    const users = await userServices.getAll();
    return res.status(200).json(users);    
  } catch (error) {
    next({ status: 400, error });
   }  
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const result = await userServices.getById(id);
      delete result.dataValues.password;
      return res.status(200).json(result);
    } catch (error) {
      return res.status(404).json({ message: 'User does not exist' });
    }
  },

  async createUser(req, res, next) {
    try {
      const { code, token, message } = await userServices.create(req.body);
      if (message) return res.status(code).json({ message });
      return res.status(code).json({ token });
    } catch (error) {
      next({ status: 400, error });
    }
  }, 

  async removeUser(req, res, next) {
    try {
      const { id } = req.params;
      await userServices.remove(id); 
      return res.status(200).end();
    } catch (error) {
      next({ status: 400, error });
    }
  },

};