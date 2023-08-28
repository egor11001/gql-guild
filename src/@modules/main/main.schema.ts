import { gql } from "graphql-modules";

export const MainType = gql`
  type Query {
    hello: String!
    text: String!
  }
`;
