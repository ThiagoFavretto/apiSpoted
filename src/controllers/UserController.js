const User = require("../models/User");

/* Metodos */
module.exports = {
  async index(req, res) {
    const user = await User.findById(req.params.id);
    return res.json(user);
  },

  async store(req, res) {
    const { name, email } = req.body;
    const userSaved = await User.create({
      name,
      email
    });
    console.log(userSaved);
    return res.json(userSaved._id);
  }
};
