import { Api, StackContext } from "sst/constructs";

export function ExampleStack({ stack }: StackContext) {
  // Add your first construct
  const api = new Api(stack, "Api", {
    routes: {
      "GET /hello": "packages/functions/src/hello.handler"
    },
  });

  // Show the API endpoint in the output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
