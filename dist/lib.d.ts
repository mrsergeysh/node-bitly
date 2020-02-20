/// <reference types="node" />
import { UrlWithStringQuery } from 'url';
import { BitlyConfig, BitlyResponse, BitlyQueryParams, BitlyReqMethod } from './types';
/**
 * Generates a valid URL for a GET request to the Bit.ly API
 * @param {object} UrlParameters An object of paramters to pass to generate a bit.ly url
 * @param {string} accessToken Your bit.ly access token
 * @param {string} method The method to call
 * @param {object} data a data object specifying bit.ly keys for your method
 * @param {object} config A custom config object to overide values
 * @private
 *
 * @example
 * ```js
 * generateUrl({method: 'shorten', accessKey: 'myaccessKey', data: { longUrl: 'https://github.com/tanepiper/node-bitly' } });
 * ```
 */
export declare function generateUrl(method: string, data?: BitlyQueryParams, config?: BitlyConfig, reqMethod?: BitlyReqMethod): UrlWithStringQuery;
/**
 * Method called to generate a url and call the request
 * @param {string} bearer The request accessToken
 * @param {string} method The method to be called on Bitly
 * @param {object} data A data object with key=>value pairs mapped to request parameters
 * @param {config} config A object that overrides the default values for a request
 * @returns {object} The request result object
 */
export declare function doRequest(bearer: string, method: string, data: BitlyQueryParams, config: BitlyConfig, reqMethod?: BitlyReqMethod): Promise<BitlyResponse>;
/**
 * Function to check through an array of items to check for short urls or hashes
 * If only passed one item, put in array for url checking
 * @param  {Array<string>} unsortedItems The array of items to be checked
 * @param  {object} result The query object
 * @return {object}
 */
export declare function sortUrlsAndHash(unsortedItems: string | string[], result?: BitlyQueryParams): BitlyQueryParams;
/**
 * Function to force a string that *could* be an old-style hash to the new ID style
 * This is allow backward-compatibility with IDs produced by V3, and perhaps stored in users' DBs
 * @param {string} hashIdOrLink An old style hash, or v4 bitly id (bitlink), or full bitly link
 * @returns {string} Bitlink (domain + hash) formatted ID
 */
export declare function forceToBitlinkId(hashIdOrLink: string): string;
export declare const BitlyIdPattern: RegExp;
export declare const BitlyHashPattern: RegExp;
export declare function throwDeprecatedErr(methodName: string, replacementMethod?: string, helpUrl?: string): void;
