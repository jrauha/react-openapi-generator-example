/* tslint:disable */
/* eslint-disable */
/**
 * FakeRESTApi.Web V1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from "../runtime";
import type { Author } from "../models";
import { AuthorFromJSON, AuthorToJSON } from "../models";

export interface AuthorsApiApiV1AuthorsAuthorsBooksIdBookGetRequest {
  idBook: number;
}

export interface AuthorsApiApiV1AuthorsIdDeleteRequest {
  id: number;
}

export interface AuthorsApiApiV1AuthorsIdGetRequest {
  id: number;
}

export interface AuthorsApiApiV1AuthorsIdPutRequest {
  id: number;
  author?: Author;
}

export interface AuthorsApiApiV1AuthorsPostRequest {
  author?: Author;
}

/**
 *
 */
export class AuthorsApi extends runtime.BaseAPI {
  /**
   */
  async apiV1AuthorsAuthorsBooksIdBookGetRaw(
    requestParameters: AuthorsApiApiV1AuthorsAuthorsBooksIdBookGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<Author>>> {
    if (
      requestParameters.idBook === null ||
      requestParameters.idBook === undefined
    ) {
      throw new runtime.RequiredError(
        "idBook",
        "Required parameter requestParameters.idBook was null or undefined when calling apiV1AuthorsAuthorsBooksIdBookGet."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/v1/Authors/authors/books/{idBook}`.replace(
          `{${"idBook"}}`,
          encodeURIComponent(String(requestParameters.idBook))
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(AuthorFromJSON)
    );
  }

  /**
   */
  async apiV1AuthorsAuthorsBooksIdBookGet(
    requestParameters: AuthorsApiApiV1AuthorsAuthorsBooksIdBookGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<Author>> {
    const response = await this.apiV1AuthorsAuthorsBooksIdBookGetRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   */
  async apiV1AuthorsGetRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<Author>>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/v1/Authors`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(AuthorFromJSON)
    );
  }

  /**
   */
  async apiV1AuthorsGet(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<Author>> {
    const response = await this.apiV1AuthorsGetRaw(initOverrides);
    return await response.value();
  }

  /**
   */
  async apiV1AuthorsIdDeleteRaw(
    requestParameters: AuthorsApiApiV1AuthorsIdDeleteRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        "id",
        "Required parameter requestParameters.id was null or undefined when calling apiV1AuthorsIdDelete."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/v1/Authors/{id}`.replace(
          `{${"id"}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: "DELETE",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   */
  async apiV1AuthorsIdDelete(
    requestParameters: AuthorsApiApiV1AuthorsIdDeleteRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.apiV1AuthorsIdDeleteRaw(requestParameters, initOverrides);
  }

  /**
   */
  async apiV1AuthorsIdGetRaw(
    requestParameters: AuthorsApiApiV1AuthorsIdGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Author>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        "id",
        "Required parameter requestParameters.id was null or undefined when calling apiV1AuthorsIdGet."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/v1/Authors/{id}`.replace(
          `{${"id"}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      AuthorFromJSON(jsonValue)
    );
  }

  /**
   */
  async apiV1AuthorsIdGet(
    requestParameters: AuthorsApiApiV1AuthorsIdGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Author> {
    const response = await this.apiV1AuthorsIdGetRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   */
  async apiV1AuthorsIdPutRaw(
    requestParameters: AuthorsApiApiV1AuthorsIdPutRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Author>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        "id",
        "Required parameter requestParameters.id was null or undefined when calling apiV1AuthorsIdPut."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json; v=1.0";

    const response = await this.request(
      {
        path: `/api/v1/Authors/{id}`.replace(
          `{${"id"}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: "PUT",
        headers: headerParameters,
        query: queryParameters,
        body: AuthorToJSON(requestParameters.author),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      AuthorFromJSON(jsonValue)
    );
  }

  /**
   */
  async apiV1AuthorsIdPut(
    requestParameters: AuthorsApiApiV1AuthorsIdPutRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Author> {
    const response = await this.apiV1AuthorsIdPutRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   */
  async apiV1AuthorsPostRaw(
    requestParameters: AuthorsApiApiV1AuthorsPostRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Author>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json; v=1.0";

    const response = await this.request(
      {
        path: `/api/v1/Authors`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: AuthorToJSON(requestParameters.author),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      AuthorFromJSON(jsonValue)
    );
  }

  /**
   */
  async apiV1AuthorsPost(
    requestParameters: AuthorsApiApiV1AuthorsPostRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Author> {
    const response = await this.apiV1AuthorsPostRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }
}
