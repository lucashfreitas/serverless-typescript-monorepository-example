import axios, { AxiosError, AxiosResponse } from 'axios';

const DEFAULT_CONFIG = {
  headers: { 'Content-Type': 'application/json' }
};

const convertToSuccessResponse = (response: AxiosResponse) => {
  return {
    isHttpError: true,
    error: false,
    data: response.data,
    status: response.status,
    statusText: response.statusText,
    headers: response.headers
  };
};

const convertToErrorResponse = (errorResponse: AxiosError) => {
  /*is axios error response*/

  if (!errorResponse.response) {
    return {
      error: true,
      isHttpError: false,
      data: `Application Error : ${errorResponse.message} `,
      status: 500,
      statusText: 'Code Exception',
      headers: null
    };
  } else {
    return {
      error: true,
      isHttpError: true,
      data: errorResponse.response.data,
      status: errorResponse.response.status,
      statusText: errorResponse.response.headers.statusText,
      headers: errorResponse.response.headers
    };
  }
};

const get = async <T>(url: string): Promise<HttpResponse<T>> => {
  try {
    const response = await axios.get(url, DEFAULT_CONFIG);
    return convertToSuccessResponse(response);
  } catch (errorResponse) {
    return convertToErrorResponse(errorResponse);
  }
};

const post = async <T>(url: string, body: any): Promise<HttpResponse<T>> => {
  try {
    const response = await axios.post(url, body, DEFAULT_CONFIG);
    return convertToSuccessResponse(response);
  } catch (errorResponse) {
    return convertToErrorResponse(errorResponse);
  }
};

export default {
  get,
  post
};

export interface HttpResponse<T> {
  data: T;
  isHttpError: boolean;
  status: number;
  statusText: string;
  error: boolean;
  headers: any;
}
