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

import { exists, mapValues } from "../runtime";
/**
 *
 * @export
 * @interface CoverPhoto
 */
export interface CoverPhoto {
  /**
   *
   * @type {number}
   * @memberof CoverPhoto
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof CoverPhoto
   */
  idBook?: number;
  /**
   *
   * @type {string}
   * @memberof CoverPhoto
   */
  url?: string | null;
}

/**
 * Check if a given object implements the CoverPhoto interface.
 */
export function instanceOfCoverPhoto(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function CoverPhotoFromJSON(json: any): CoverPhoto {
  return CoverPhotoFromJSONTyped(json, false);
}

export function CoverPhotoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CoverPhoto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, "id") ? undefined : json["id"],
    idBook: !exists(json, "idBook") ? undefined : json["idBook"],
    url: !exists(json, "url") ? undefined : json["url"],
  };
}

export function CoverPhotoToJSON(value?: CoverPhoto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    idBook: value.idBook,
    url: value.url,
  };
}
