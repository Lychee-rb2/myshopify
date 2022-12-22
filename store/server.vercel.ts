import type { AppLoadContext, ServerBuild } from "@remix-run/server-runtime";
import type { GetLoadContextFunction } from "@remix-run/vercel";
import { createRequestHandler } from "@remix-run/vercel";
import { createRemixRequest } from "@remix-run/vercel/dist/server";

interface VercelServerParams {
  getContext: (request: Request) => AppLoadContext;
  build: ServerBuild;
}

export const vercelServer = ({ getContext, build }: VercelServerParams) => {
  const getLoadContext: GetLoadContextFunction = (req, res) => {
    const request = createRemixRequest(req, res);
    return getContext(request);
  };
  return createRequestHandler({
    build,
    mode: process.env.NODE_ENV,
    getLoadContext,
  });
};
