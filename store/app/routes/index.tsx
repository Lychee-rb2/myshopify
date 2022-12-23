import { pageLoader } from "~/server/page.server";
import type { LoaderArgs } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import { useLoaderData } from "@remix-run/react";
import { Container } from "~/components/atom/container";
import { SlicesResolve } from "~/components/slice/slices-resolve";
import { typedBoolean } from "~/utils";

export const loader = async (args: LoaderArgs) => {
  const page = await pageLoader(args);
  return json({ page });
};

export default function Home() {
  const { page } = useLoaderData<typeof loader>();
  const slices = page.sliceCollection?.items.filter(typedBoolean);
  return (
    <Container.Page>
      <SlicesResolve slices={slices} />
    </Container.Page>
  );
}
