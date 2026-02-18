const http = require("http");
const ngrok = require("@ngrok/ngrok");

// Create a simple HTTP server
http
  .createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from ngrok-js!\n");
  })
  .listen(8080, () => console.log("Server listening on port 8080"));

// Forward ngrok traffic to the local server
ngrok
  .forward({ addr: 8080, authtoken_from_env: true })
  .then((listener) => console.log(`Ingress established at: ${listener.url()}`));
