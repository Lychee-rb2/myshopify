import type { LoaderArgs } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import zhCN from "~/locales/zh-CN";

export const loader = async (args: LoaderArgs) => {
  const globalCollection = await args.context.contentful.GlobalCollection();
  const global = globalCollection.globalCollection?.items[0];
  if (!global) throw new Error("Fetch global data fail");
  const { seo } = global;
  return json({
    seo,
    global,
    locale: zhCN,
  });
};
