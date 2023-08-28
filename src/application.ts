import { createApplication } from "graphql-modules";
import { mainModule } from "./@modules/main/main.module";

// This is your application, it contains your GraphQL schema and the implementation of it.
export const application = createApplication({
  modules: [mainModule],
});

// This is your actual GraphQL schema
export const mainSchema = application.schema;
