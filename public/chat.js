document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const username = params.get("username");
  document.getElementById("username").textContent = username;

  const messagesContainer = document.getElementById("messages");

  // Read previous messages from messages.txt
  fetch("/getMessages")
    .then((response) => response.json())
    .then((messages) => {
      messages.forEach((message) => {
        const div = document.createElement("div");
        div.textContent = message;
        messagesContainer.appendChild(div);
      });
    });

  const allMessagesContainer = document.getElementById("all-messages");

  // Read all content from messages.txt
  fetch("/chat/allMessages")
    .then((response) => response.text())
    .then((messages) => {
      allMessagesContainer.innerHTML = messages;
    });

  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const message = document.getElementById("message").value;

    const div = document.createElement("div");
    div.textContent = `${username}: ${message}`;
    messagesContainer.appendChild(div);

    form.reset();

    // Send the message to the server for saving (POST request to /chat/send)
    fetch("/chat/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `message=${encodeURIComponent(
        message
      )}&username=${encodeURIComponent(username)}`,
    });
  });
});
