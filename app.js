const express = require("express");
const loginRoute = require("./routes/login");
const chatRoute = require("./routes/chat");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/login", loginRoute);
app.use("/chat", chatRoute);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "chat.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/login`);
});
