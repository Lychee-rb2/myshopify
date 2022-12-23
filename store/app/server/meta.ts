import type {
  HtmlMetaDescriptor,
  MetaFunction,
} from "@remix-run/server-runtime";

export const meta: MetaFunction = (args) => {
  return {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    ...metaHelper(args),
  };
};
export const metaHelper: MetaFunction = ({
  data,
}: {
  data: { seo: HtmlMetaDescriptor };
}) => data?.seo || {};
