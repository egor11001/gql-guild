import { createModule } from "graphql-modules";
import { MainType } from "./main.schema";
import { MainResolver } from "./main.resolver";

export const mainModule = createModule({
  id: "main-module",
  dirname: __dirname,
  typeDefs: [MainType],
  resolvers: MainResolver,
});
