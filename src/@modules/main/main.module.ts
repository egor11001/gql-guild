import { createModule } from "graphql-modules";
import { MainType } from "@/@modules/main/main.schema";
import { MainResolver } from "@/@modules/main/main.resolver";

export const mainModule = createModule({
  id: "main-module",
  dirname: __dirname,
  typeDefs: [MainType],
  resolvers: MainResolver,
});
