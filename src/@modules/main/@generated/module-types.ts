/* eslint-disable */
import * as Types from "../../../@generated/graphql";
import * as gm from "graphql-modules";
export namespace MainModule {
  interface DefinedFields {
    Query: "hello" | "text";
  }

  export type Query = Pick<Types.Query, DefinedFields["Query"]>;

  export type QueryResolvers = Pick<
    Types.QueryResolvers,
    DefinedFields["Query"]
  >;

  export interface Resolvers {
    Query?: QueryResolvers;
  }

  export interface MiddlewareMap {
    "*"?: {
      "*"?: gm.Middleware[];
    };
    Query?: {
      "*"?: gm.Middleware[];
      hello?: gm.Middleware[];
      text?: gm.Middleware[];
    };
  }
}
