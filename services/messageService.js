const Message = require("../models/Message");

const createMessage = async ({ name, email, message }) => {
  return await Message.create({ name, email, message });
};

module.exports = { createMessage };