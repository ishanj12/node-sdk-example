const http = require("http");
const ngrok = require("@ngrok/ngrok");

function startServer() {
  const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from ngrok-js!\n");
  });

  server.listen(8085, () => {
    console.log("Server listening on port 8085");
  });
}

async function startNgrok() {
  const listener = await ngrok.forward({ addr: 8085, authtoken_from_env: true });
  console.log(`Ingress established at: ${listener.url()}`);
}

async function main() {
  startServer();
  await startNgrok();
}

main();
