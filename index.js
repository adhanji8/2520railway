const http = require("node:http");
function listener(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
  res.end("<h1>Homepage is here!</h1>");
}

const server = http.createServer(listener);

server.listen(8081, () => {
  console.log("Server is running!");
});
