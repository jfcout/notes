import { SSTConfig } from "sst";
import { StorageStack } from "./stacks/StorageStack";
import { ApiStack } from "./stacks/ApiStack";
//import { AuthStack } from "./stacks/AuthStack";

export default {
  config(_input) {
    return {
      name: "notes",
      region: "cn-north-1",
    };
  },
  stacks(app) {
//    app.stack(StorageStack).stack(ApiStack).stack(AuthStack);
    app.stack(StorageStack).stack(ApiStack);
  },
} satisfies SSTConfig;
