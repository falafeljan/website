# Jan's Personal Website 💿

This is quite straightforward so far. Get a recent release of Node.js, then install all dependencies with `npm install`. You'll be having the following commands at your hand:

* `npm run build` Build all assets with Webpack.
* `npm run dev` Run the Webpack development server for local development.
* `npm test` Run tests, lint.

### Settings

There are some settings to be supplied in the `.env` file. Currently, setting only the `email` key is provided, which is used for contacting purposes. Have a look into `.env-example` for more information.

### Deploying 🐳

This repository includes a sample `Dockerfile` for running the website with [NGINX](https://www.nginx.com/). To build it properly, build all static assets beforehand (see `build` command above), then fire up `docker build`.
