const messageService = require("../services/messageService");

const createMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const emailOk = /^\S+@\S+\.\S+$/.test(email);
    if (!emailOk) {
      return res.status(400).json({ error: "Please enter a valid email" });
    }

    await messageService.createMessage({ name, email, message });
    res.status(201).json({ success: true });
   } catch (error) {
    console.log("SAVE ERROR:", error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createMessage };