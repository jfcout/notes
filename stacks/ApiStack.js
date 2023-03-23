import { Api, use } from "sst/constructs";
import { StorageStack } from "./StorageStack";

export function ApiStack({ stack, app }){
  const { table } = use(StorageStack);
  const api = new Api(stack, "Api", {
    authorizer: "iam",
    defaults: {
      function: {
        bind: [table],
      },
    },
    routes: {
      "POST /notes": "packages/functions/src/create.main",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  return {
    api,
  };

}

