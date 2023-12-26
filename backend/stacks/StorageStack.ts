import { StackContext, Table } from 'sst/constructs'

export function StorageStack({ stack }: StackContext) {
  const table = new Table(stack, "Notes", {
    fields: {
      noteId: "string",
    },
    primaryIndex: { partitionKey: "noteId" },
  });
  stack.addOutputs({
    table: table.tableName,
  });
  return {
    table,
  };
}
