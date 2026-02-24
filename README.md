# node-sdk-example

This example application starts a hello world HTTP server on port 8085 and then uses the [ngrok Node.js SDK](https://github.com/ngrok/ngrok-javascript) (`@ngrok/ngrok`) to forward public traffic to that server. See the [quickstart](https://ngrok.com/docs/getting-started/javascript/) and [SDK reference](https://ngrok.github.io/ngrok-javascript/) for more details. When you run it, you'll get a public URL that anyone can use to access your app.

## Option 1: Clone and Run This Example

```sh
git clone git@github.com:ngrok/node-sdk-example.git
cd node-sdk-example
npm install
NGROK_AUTHTOKEN=<token> node index.js
```

## Option 2: Add ngrok to Your Own App

1. Install the SDK:

   ```sh
   npm install @ngrok/ngrok
   ```

2. Add the following to your app:

   ```js
   const ngrok = require("@ngrok/ngrok");

   async function forwardToApp() {
     const listener = await ngrok.forward({
       addr: "localhost:8085",
       authtoken_from_env: true,
     });
     console.log(`Available at: ${listener.url()}`);
   }
   ```

3. Set your authtoken:

   ```sh
   export NGROK_AUTHTOKEN=<token>
   ```

## License

MIT
