const jwt = require("jsonwebtoken");

const getUser = async (username: string) => {
  return {
    userId: 123,
    password: "123456",
    username,
  };
};

module.exports = {};
