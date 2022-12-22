import * as build from "@remix-run/dev/server-build";
import { getContext } from "./server/context";
import { vercelServer } from "./server/vercel";

export default vercelServer({ getContext, build });
