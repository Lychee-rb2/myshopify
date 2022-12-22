import type { Response } from "graphql-request/dist/types";
import { ClientError } from 'graphql-request'

export const errorHandle = (
  response: Error | Response<unknown>,
  handle?: {
    error?: (e: Error) => void;
    clientError?: (e: ClientError) => void;
  }
) => {
  if (response instanceof Error) {
    if (response instanceof ClientError) {
      handle?.clientError?.(response);
    } else {
      handle?.error?.(response);
    }
  }
};


