# node-sdk-example

A minimal HTTP server using the [ngrok Node.js SDK](https://github.com/ngrok/ngrok-javascript) (`@ngrok/ngrok`).

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- An [ngrok account](https://dashboard.ngrok.com/signup) with an authtoken

## Usage

```sh
export NGROK_AUTHTOKEN="your-authtoken"
npm install
node index.js
```

The server will start and print the public ngrok URL. You can then make requests to it:

```sh
curl https://<your-ngrok-url>
# Hello from node-sdk-example!
```

## License

MIT
