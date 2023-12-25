import { APIGatewayProxyHandlerV2 } from 'aws-lambda'

export const handler: APIGatewayProxyHandlerV2 = async () => {
  console.log('Hello world')
  return {
    statusCode: 200,
    isBase64Encoded: false,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: "Hello world" }),
  };
}
