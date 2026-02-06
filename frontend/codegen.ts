import type { CodegenConfig } from "@graphql-codegen/cli";

const endpoint =
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "http://localhost:8000/graphql";

const config: CodegenConfig = {
  schema: endpoint,
  documents: ["lib/graphql/queries.ts"],
  ignoreNoDocuments: true,
  generates: {
    "./lib/graphql/generated/": {
      preset: "client",
      config: {
        useTypeImports: true,
        skipTypename: true,
        enumsAsTypes: true,
      },
    },
  },
};

export default config;
