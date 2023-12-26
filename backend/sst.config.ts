import { SSTConfig } from "sst";
import { MyStack } from "./stacks/MyStack";
import { StorageStack } from './stacks/StorageStack'

export default ({
  config(_input) {
    return {
      name: "backend",
      region: "ap-east-1",
      profile: "jan24th",
    };
  },
  stacks(app) {
    app.stack(StorageStack).stack(MyStack);
  },
} satisfies SSTConfig);
