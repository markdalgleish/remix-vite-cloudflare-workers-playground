import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ context }: LoaderFunctionArgs) => {
  return {
    city: context.cloudflare.cf.city,
  };
};

export default function HelloRoute() {
  const { city } = useLoaderData<typeof loader>();
  return <h1>Hello {city}!</h1>;
}
