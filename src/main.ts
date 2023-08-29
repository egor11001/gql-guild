import { createServer } from "http";
import { useGraphQLModules } from "@envelop/graphql-modules";
import { createYoga } from "graphql-yoga";
import * as dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";

import { application } from "@/application";

const env = dotenv.config();
dotenvExpand.expand(env);

const bootstrap = () => {
  const yoga = createYoga({
    plugins: [useGraphQLModules(application)],
  });
  const server = createServer(yoga);

  server.listen(process.env.PORT, () => {
    console.log(`🚀 Server ready`);
  });
};

bootstrap();
