import type { LoaderArgs } from '@remix-run/server-runtime'
import { json } from '@remix-run/server-runtime'
import { useLoaderData } from '@remix-run/react'

export const loader = async (args: LoaderArgs) => {
  return json({
    shopify: await args.context.shopify.products(),
    contentful: await args.context.contentful.GlobalCollection()
  })
}
export default function Index() {
  const { shopify, contentful } = useLoaderData<typeof loader>()
  return (
    <div className="container">
      <h1>Welcome to Remix</h1>
      {JSON.stringify(shopify)}
      {JSON.stringify(contentful)}
    </div>
  );
}
