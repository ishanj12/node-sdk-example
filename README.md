# node-sdk-example

This example application starts a hello world HTTP server on port 8085 and then uses the [ngrok Node.js SDK](https://github.com/ngrok/ngrok-javascript) (`@ngrok/ngrok`) to forward public traffic to that server. See the [quickstart](https://ngrok.com/docs/getting-started/javascript/) and [SDK reference](https://ngrok.github.io/ngrok-javascript/) for more details. When you run it, you'll get a public URL that anyone can use to access your app.

## Clone and Run This Example

```sh
git clone git@github.com:ngrok/node-sdk-example.git
cd node-sdk-example
npm install
NGROK_AUTHTOKEN=<token> node index.js
```

## License

MIT
