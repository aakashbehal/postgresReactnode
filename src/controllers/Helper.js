const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 * Method to create hasded password
 * @param {string} password
 * @return {string} hashed password
 */
const passwordHash = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

/**
 * Method to compare passowrd
 * @param {string} hashPassword
 * @param {string} originalPassword
 * @return {Boolean} true false
 */
const comparePassword = (hashPassword, originalPassword) => {
  return bcrypt.compareSync(originalPassword, hashPassword);
};

/**
 * Method valids the email
 * @param {string} email
 * @return {Boolean} true false
 */
const isEmailValid = email => {
  return /\S+@\S+\.\S+/.test(email);
};

/**
 * Method to generate Token
 * @param {string} id
 * @returns {string} token
 */
const generateToken = id => {
  const token = jwt.sign(
    {
      userId: id
    },
    process.env.SECRET,
    { expiresIn: "1d" }
  );
  return token;
};

module.exports = {
  passwordHash,
  comparePassword,
  isEmailValid,
  generateToken
};
