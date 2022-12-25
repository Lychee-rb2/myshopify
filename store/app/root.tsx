import type { LinksFunction } from "@remix-run/server-runtime";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import tailwindStylesheetUrl from "~/styles/tailwind.css";
import type { loader } from "~/components/root/root.server";
import { GlobalProvider } from "~/hooks/context/useGlobal";
import { Layout, meta } from "~/components/root/layout";
import { LocaleProvider } from "~/hooks/context/useLocale";
import { AnimatePresence } from "framer-motion";

export { meta };
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStylesheetUrl },
];
export { loader } from "~/components/root/root.server";

export default function App() {
  const { global, locale } = useLoaderData<typeof loader>();
  return (
    <html lang="en">
      <head>
        <title>{global.seo?.title}</title>
        <Meta />
        <Links />
      </head>
      <body className="flex h-full flex-col bg-black text-zinc-200">
        <LocaleProvider locale={locale}>
          <GlobalProvider global={global}>
            <Layout>
              <AnimatePresence mode="wait">
                <Outlet />
              </AnimatePresence>
            </Layout>
          </GlobalProvider>
        </LocaleProvider>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
