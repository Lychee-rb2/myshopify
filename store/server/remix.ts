import "@remix-run/server-runtime";
import type { getContext } from './context'


declare module "@remix-run/server-runtime" {
  interface AppLoadContext extends ReturnType<typeof getContext> {
  }
}
