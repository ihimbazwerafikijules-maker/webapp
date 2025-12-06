const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/login") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("User Authentication Feature: Login Page");
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page - Node.js App Running");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
