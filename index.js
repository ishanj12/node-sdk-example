const http = require("http");
const ngrok = require("@ngrok/ngrok");

async function main() {
  // Create HTTP server
  const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from node-sdk-example!\n");
  });

  // Listen on a local port
  server.listen(8080, async () => {
    // Create ngrok endpoint forwarding to local server
    const listener = await ngrok.forward({
      addr: 8080,
      authtoken_from_env: true,
    });

    console.log(`Endpoint online: ${listener.url()}`);
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
