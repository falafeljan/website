# Jan's Personal Website

This is quite straightforward so far. Hit up Yarn with `yarn install`, with
the following commands at your hand:

* `yarn run build` Build all assets with Webpack.
* `yarn run dev` Run the Webpack development server for local development.
* `yarn run test` Run tests, lint.

### Settings

There are some settings to be supplied in the `settings.json` file. Currently,
setting only the `email` key is provided. This key contains a Base64-encoded e-mail address.

### Deploying 🐳

This repository includes a sample `Dockerfile` for running the website with
[NGINX](https://www.nginx.com/). To build it properly, build all static assets
beforehand (see `build` command above), then fire up `docker-build`.
