const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

router.get("/", (req, res) => {
  const username = req.query.username;
  if (!username) {
    return res.redirect("/login");
  }

  // Read previous messages from messages.txt
  fs.readFile("messages.txt", "utf8", (err, data) => {
    if (err) throw err;

    const messages = data.split("\n").filter(Boolean);
    res.sendFile(path.join(__dirname, "../public/chat.html"), {
      messages,
      username,
    });
  });
});

router.get("/allMessages", (req, res) => {
  // Read all content from messages.txt
  fs.readFile("messages.txt", "utf8", (err, data) => {
    if (err) throw err;

    const messages = data.split("\n").filter(Boolean);
    res.send(messages.join("<br>"));
  });
});

router.post("/send", (req, res) => {
  const username = req.body.username;
  const message = req.body.message;

  // Save message to a file
  fs.appendFile("messages.txt", `${username}: ${message}\n`, (err) => {
    if (err) throw err;
    console.log("Message saved!");
  });

  res.send("Message received and saved!");
});

module.exports = router;
