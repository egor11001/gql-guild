import { MainModule } from "@/@modules/main/@generated/module-types";

export const MainResolver: MainModule.Resolvers = {
  Query: {
    hello: () => "world",
    text: () => "123",
  },
};
