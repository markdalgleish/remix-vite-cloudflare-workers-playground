import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix + Vite + Cloudflare Workers" },
    {
      name: "description",
      content: "Hello from Remix + Vite + Cloudflare Workers!",
    },
  ];
};

export default function Index() {
  return <h1>Home</h1>;
}
