import { createServer } from "http";
import { useGraphQLModules } from "@envelop/graphql-modules";
import { createYoga } from "graphql-yoga";
import { application } from "./application";

const bootstrap = () => {
  const yoga = createYoga({
    plugins: [useGraphQLModules(application)],
  });
  const server = createServer(yoga);

  server.listen(4000, () => {
    console.log(`🚀 Server ready`);
  });
};

bootstrap();
