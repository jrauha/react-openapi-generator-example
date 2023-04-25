# React OpenAPI Generator Example

This project demonstrates how to use the [typescript-fetch](https://github.com/OpenAPITools/openapi-generator/blob/master/docs/generators/typescript-fetch.md) generator from the [OpenAPI generator library](https://github.com/OpenAPITools/openapi-generator) in a React application.

## Requirements:

- node.js
- Java (for generating the api client)

## Installation:

Install dependencies

```bash
npm install
```

Generate the API client

```bash
npm run generate-api-client
```

Run the application

```bash
npm run dev
```

## Generating API client from custom schema

To generate the API client from a custom schema, run:

```bash
npm run generate-api-client [schema URI]
```

Example:

```bash
npm run generate-api-client https://petstore.swagger.io/v2/swagger.json
```

## How it works

The OpenAPI Generator utilizes an OpenAPI schema file as input and produces API classes in the `src/api/generated-client` directory. Components can import the client and initiate API calls.
