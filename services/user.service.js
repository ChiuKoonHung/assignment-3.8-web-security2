const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const {secret} = require("../constants");

const saltRounds = 10;

function signup(email, pwd) {
  // skip email validation here

  bcrypt.hash(pwd, saltRounds, function (err, hash) {
    if (err) {
      console.error(err);
      throw err;
    }

    User.create({
      email,
      pwd: hash,
    });
  });
}

async function login(email, pwd) {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  // Check if user is found
  if (!user) {
    throw new Error("User not found");
  }

  // Check if password match
  const match = await bcrypt.compare(pwd, user.pwd);

  if (!match) throw new Error("Password not matched");
  
  const plainUserObject = {
      id:user.id, 
      email:user.email
  }

  const token = jwt.sign(plainUserObject, secret);
  
  return {
      token,
      message:"Login successful"
  }
}

async function getById(id) {
  return await User.findByPk(id);
}

async function getAll() {
  return await User.findAll();
}

module.exports = {
  signup,
  login,
  getById,
  getAll,
};
