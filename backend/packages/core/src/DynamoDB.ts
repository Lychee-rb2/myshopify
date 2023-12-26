import AWS from "aws-sdk";
import { Table } from "sst/node/table";
import * as uuid from "uuid";
import { Key } from 'aws-sdk/clients/dynamodb'

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const notes = {
  async create({ content, userId }: { content: string, userId: string }) {
    const t = Date.now()
    const Item = {
      userId, // The id of the author
      noteId: uuid.v1(), // A unique uuid
      content, // Parsed from request body
      createdAt: t, // Current Unix timestamp,
      updatedAt: t,
      archived: false
    }
    await dynamoDb.put({
      TableName: Table.Notes.tableName,
      Item
    }).promise()
    return Item
  },
  list(nextToken?: Key) {
    return dynamoDb.scan({ TableName: Table.Notes.tableName, ExclusiveStartKey: nextToken, Limit: 3 }).promise()
  },
  delete(noteId: string) {
    return dynamoDb.delete({
      TableName: Table.Notes.tableName, Key: {
        noteId
      }
    }).promise()
  }
}
