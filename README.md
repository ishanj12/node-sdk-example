# node-sdk-example

A minimal HTTP server using the [ngrok Node.js SDK](https://github.com/ngrok/ngrok-javascript) (`@ngrok/ngrok`).

## Clone and Run

```sh
git clone git@github.com:ngrok/node-sdk-example.git
cd node-sdk-example
npm install
NGROK_AUTHTOKEN=<token> node index.js
```

## Add to Existing Code

1. Install the SDK:

   ```sh
   npm install @ngrok/ngrok
   ```

2. Set your authtoken:

   ```sh
   export NGROK_AUTHTOKEN=<token>
   ```

3. Add the following to your app:

   ```js
   const ngrok = require("@ngrok/ngrok");

   async function forwardToApp() {
     const listener = await ngrok.forward({
       addr: "localhost:8080",
       authtoken_from_env: true,
     });
     console.log(`Ingress established at: ${listener.url()}`);
   }
   ```

## License

MIT
