const jwtGenerator = require('../helpers/jwtGenerator');
const { User } = require('../models');

module.exports = {

  async create({ displayName, email, password, image }) {    
    const user = await User.findOne({ where: { email } });  
    if (user) return { code: 409, message: 'User already registered' };

    const newUser = await User.create({ displayName, email, password, image });
    const token = jwtGenerator({ id: newUser.id, displayName });  
    return { code: 200, token };
  },

  async getAll() {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });

    return users;
  },

  async getById(id) {
    const user = await User.findByPk(id);
    if (!user) return null;
    return user;
  },  

  async getByEmail(email) {
    const checkedEmail = await User.findOne({ where: { email } });
    if (checkedEmail) return checkedEmail;
    return false;
  },  

  async remove(id) {         
      const user = await User.findByPk({ where: { id } });
      await user.destroy();        
      return { code: 200 };
  },
};