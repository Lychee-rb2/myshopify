import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { notes } from '@backend/core/DynamoDB'

export const post: APIGatewayProxyHandlerV2 = async (event) => {
  const body = event.body
  if (!body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: true }),
    };
  }
  const data = JSON.parse(body);
  const item = await notes.create(data)
  return {
    statusCode: 200,
    body: JSON.stringify(item),
  }
};

export const list: APIGatewayProxyHandlerV2 = async (event) => {
  const body = event.body
  const data = JSON.parse(body || "{}");
  const res = await notes.list(data.after)
  return {
    statusCode: 200,
    body: JSON.stringify({
      items: res.Items,
      token: res.LastEvaluatedKey
    }),
  }
}

export const del: APIGatewayProxyHandlerV2 = async (event) => {
  if (!event.pathParameters?.id) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: true }),
    };
  }

  await notes.delete(event.pathParameters.id)
  return {
    statusCode: 200,
    body: JSON.stringify({}),
  }
}
