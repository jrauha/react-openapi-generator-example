import { BooksApi, Configuration, DefaultConfig } from "./generated-client";

const config = new Configuration({
  ...DefaultConfig,
  basePath: import.meta.env.VITE_API_BASE_PATH,
});

export const Api = { book: new BooksApi(config) };
export * from "./generated-client/models";
