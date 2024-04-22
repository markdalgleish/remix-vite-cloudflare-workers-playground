# Remix + Vite + Cloudflare Workers Playground

Demo app using [Remix](https://remix.run) with [Vite](https://vitejs.dev) on [Cloudflare Workers](https://workers.cloudflare.com).

## Typegen

Generate types for your Cloudflare bindings in `wrangler.toml`:

```sh
pnpm typegen
```

You will need to rerun typegen whenever you make changes to `wrangler.toml`.

## Development

Run the Vite dev server:

```sh
pnpm dev
```

To run Wrangler:

```sh
pnpm build
pnpm start
```

## Deployment

If you don't already have an account, then [create a cloudflare account here](https://dash.cloudflare.com/sign-up) and after verifying your email address with Cloudflare, go to your dashboard and set up your free custom Cloudflare Workers subdomain.

Once that's done, you should be able to deploy your app:

```sh
pnpm run deploy
```
