import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/@modules/**/*.schema.ts",
  // documents: ["src/**/*.schema.ts"],
  generates: {
    "./src/@modules/": {
      preset: "graphql-modules",
      presetConfig: {
        baseTypesPath: "../@generated/graphql.ts",
        filename: "@generated/module-types.ts",
      },
      plugins: [
        {
          add: {
            content: "/* eslint-disable */",
          },
        },
        "typescript",
        "typescript-resolvers",
      ],
    },
  },
};
export default config;
