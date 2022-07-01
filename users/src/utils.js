const bcrypt = require("bcryptjs");

const encryptOneWay = async (text) => {
  const salt = await bcrypt.genSalt(3);
  return await bcrypt.hash(text, salt);
};

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
};

module.exports = {isValidEmail, encryptOneWay};