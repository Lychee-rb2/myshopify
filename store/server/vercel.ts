import { vercelServer } from '../server.vercel'
import * as build from "@remix-run/dev/server-build";
import { getContext } from './context';

export default vercelServer({ getContext, build });
