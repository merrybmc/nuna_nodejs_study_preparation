const userController = {};
const bcrypt = require('bcrypt');
const User = require('../model/User');
const saltRounds = 10;

userController.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      throw new Error('이미 가입이 된 유저입니다.');
    }
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = new User({ name, email, password: hash });
    await newUser.save();
    res.status(200).json({ status: 'ok', newUser });
  } catch (error) {
    res.status(400).json({ status: 'fail', error });
  }
};

module.exports = userController;
