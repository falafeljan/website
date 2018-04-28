# Jan's Personal Website

This is quite straightforward so far. Get all dependencies via `npm install`,
with the following commands at your hand:

* `npm run build` Build all assets with Webpack.
* `npm run dev` Run the Webpack development server for local development.
* `npm test` Run tests, lint.

### Settings

There are some settings to be supplied in the `.env` configuration file.
Currently, only the email address key is provided. Create your own configuration
by renaming `.env-example` and filling in the details.

### Deploying 🐳

This repository includes a sample `Dockerfile` for running the website with
[NGINX](https://www.nginx.com/). To build it properly, build all static assets
beforehand (see `build` command above), then fire up `docker-build`.
