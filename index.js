const http = require("http");
const ngrok = require("@ngrok/ngrok");

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from ngrok-js!\n");
});

(async function () {
  await ngrok.listen(server);
  console.log(`Ingress established at: ${server.listener.url()}`);
})();
