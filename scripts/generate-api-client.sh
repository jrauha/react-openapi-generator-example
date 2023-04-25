#!/bin/sh

SCHEMA_PATH="${1:-https://fakerestapi.azurewebsites.net/swagger/v1/swagger.json}"

openapi-generator-cli generate \
    -i  $SCHEMA_PATH \
    --config openapi-config.yaml \
    -g typescript-fetch \
    -o src/api/generated-client/