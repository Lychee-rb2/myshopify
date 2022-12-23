import type { PageFragment } from "~/contentful/generated";
import type { SerializeFrom } from "@remix-run/server-runtime";

export const pageResolve = (page: SerializeFrom<PageFragment>) => page.slug;
