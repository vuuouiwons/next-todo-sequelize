export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface ApiRequestConfig {
  /**
   * The base URL prefix for the API instance.
   * @example '/api/edge/v1'
   */
  prefix: string;

  /**
   * The specific API endpoint path.
   * @example '/email' or '/users/profile'
   */
  endpoint: string;

  /**
   * HTTP request method. Restriced to standard CRUD methods.
   */
  method: HttpMethod;

  /**
   * Key-value pairs representing request headers.
   * @example { 'Authorization': 'Bearer token123' }
   */
  headers: Record<string, string>;

  /**
   * Optional payload for POST, PUT, or PATCH requests.
   */
  body?: unknown;
}