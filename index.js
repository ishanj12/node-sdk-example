const http = require("http");
const ngrok = require("@ngrok/ngrok");

// This HTTP server is just for demonstration. If you already have an app
// running, skip startServer() and point ngrok.forward() at its port instead.
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
  const listener = await ngrok.forward({
    addr: 8085,
    authtoken_from_env: true,

    // Uncomment below to load balance across multiple instances of your app.
    // Run this script on multiple machines with the same domain to create a pool.
    // https://ngrok.com/docs/universal-gateway/endpoint-pooling/
    // domain: "your-domain.ngrok.app",
    // pooling_enabled: true,

    // Uncomment below to require visitors to log in with Google before
    // accessing your app. No OAuth app setup needed — ngrok handles it.
    // https://ngrok.com/docs/traffic-policy/actions/oauth/
    // oauth_provider: "google",
  });
  console.log(`Ingress established at: ${listener.url()}`);
}

async function main() {
  startServer();
  await startNgrok();
}

main();
