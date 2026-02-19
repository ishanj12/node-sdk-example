// Simple server on port 8080 (simulates "existing app")
const http = require("http");
http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from existing Node app!\n");
}).listen(8080, () => console.log("Existing app on http://localhost:8080"));

// --- Snippet from README "Add to Existing Code" ---
const ngrok = require("@ngrok/ngrok");

async function forwardToApp() {
  const listener = await ngrok.forward({
    addr: "localhost:8080",
    authtoken_from_env: true,
  });
  console.log(`Ingress established at: ${listener.url()}`);
}

forwardToApp();
