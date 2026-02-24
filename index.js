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

async function connectNgrok() {
  const listener = await ngrok.forward({
    addr: 8085,
    authtoken_from_env: true,

    // Uncomment below to use a specific domain.
    // https://dashboard.ngrok.com/domains
    // domain: "your-domain.ngrok.app",

    // Uncomment below to load balance across multiple instances of your app.
    // https://ngrok.com/docs/universal-gateway/endpoint-pooling/
    // pooling_enabled: true,

    // Uncomment below to require visitors to log in with Google before accessing your app. 
    // https://ngrok.com/docs/traffic-policy/actions/oauth/
    // traffic_policy: JSON.stringify({
    //   on_http_request: [
    //     { actions: [{ type: "oauth", config: { provider: "google" } }] },
    //   ],
    // }),
  });
  console.log(`Available at: ${listener.url()}`);
}

async function main() {
  startServer();
  await connectNgrok();
}

main();
