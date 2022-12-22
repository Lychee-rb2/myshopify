import type { GetLoadContextFunction, RequestHandler } from "@remix-run/express";
import { createRequestHandler } from '@remix-run/express'
import { createRemixRequest } from "@remix-run/express/dist/server";
import type { AppLoadContext } from "@remix-run/node";

const path = require("path");

export const remixContextMiddleware =
  (getContext: (request: Request) => AppLoadContext): RequestHandler =>
    (req, res, next) => {
      const BUILD_DIR = path.join(process.cwd(), "build");
      process.env.NODE_ENV === "development" && purgeRequireCache(BUILD_DIR);
      const getLoadContext: GetLoadContextFunction = (req, res) => {
        const request = createRemixRequest(req, res);
        return getContext(request);
      };
      return createRequestHandler({
        build: require(BUILD_DIR),
        mode: process.env.NODE_ENV,
        getLoadContext
      })(req, res, next);
    };

function purgeRequireCache(BUILD_DIR: string) {
  // purge require cache on requests for "server side HMR" this won't let
  // you have in-memory objects between requests in development,
  // alternatively you can set up nodemon/pm2-dev to restart the server on
  // file changes, but then you'll have to reconnect to databases/etc on each
  // change. We prefer the DX of this, so we've included it for you by default
  for (const key in require.cache) {
    if (key.startsWith(BUILD_DIR)) {
      delete require.cache[key];
    }
  }
}
