const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

router.post("/login", (req, res) => {
  const username = req.body.username;
  // Save username to local storage
  res.redirect(`/chat?username=${encodeURIComponent(username)}`);
});

module.exports = router;
