import { Api, StackContext, use } from "sst/constructs";
import { StorageStack } from './StorageStack'

export function MyStack({ stack }: StackContext) {
  const { table } = use(StorageStack);

  const api = new Api(stack, "Api", {
    defaults: {
      function: {
        timeout: "30 seconds",
        bind: [table]
      },
    },
    routes: {
      "GET /notes": "packages/functions/src/notes.list",
      "POST /note": "packages/functions/src/notes.post",
      "DELETE /note/{id}": "packages/functions/src/notes.del",
    },
  });

  // Show the API endpoint in the output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  return {
    api,
  };
}
