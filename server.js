const http = require("http");

const server = http.createServer((request, response) => {
  const url = request.url;

  if (url === "/home") {
    response.setHeader("Content-Type", "text/html");
    response.write("<h1>Welcome home</h1>");
    response.end();
  } else if (url === "/about") {
    response.setHeader("Content-Type", "text/html");
    response.write("<h1>Welcome to About Us page</h1>");
    response.end();
  } else if (url === "/node") {
    response.setHeader("Content-Type", "text/html");
    response.write("<h1>Welcome to my Node Js project</h1>");
    response.end();
  } else {
    response.setHeader("Content-Type", "text/html");
    response.write("<h1>Page not found</h1>");
    response.end();
  }
});

server.listen(3000);
