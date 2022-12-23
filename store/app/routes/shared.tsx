import { Container } from "~/components/atom/container";
import type { LoaderArgs } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import { pageLoader } from "~/server/page.server";

export const loader = async (args: LoaderArgs) => {
  const page = await pageLoader(args);
  return json({ page });
};
export default function Shared() {
  return <Container.Wip />;
}
