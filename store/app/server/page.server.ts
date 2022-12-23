import type { LoaderArgs } from "@remix-run/server-runtime";

export const pageLoader = async (args: LoaderArgs) => {
  const slug = new URL(args.request.url).pathname;
  const pages = await args.context.contentful.page({ slug });
  const page = pages.pageCollection?.items[0];
  if (!page) throw new Error(`Fetch ${slug} fail`);
  return page;
};
