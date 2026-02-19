const http = require("http");
const ngrok = require("@ngrok/ngrok");

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from ngrok-js!\n");
});

server.listen(8080, async () => {
  const listener = await ngrok.forward({ addr: 8080, authtoken_from_env: true });
  console.log(`Ingress established at: ${listener.url()}`);
});
