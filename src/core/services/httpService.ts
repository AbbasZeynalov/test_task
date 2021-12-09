import axios, { AxiosRequestConfig, AxiosResponse, AxiosStatic } from "axios";

export interface IHttpResponse<T> extends AxiosResponse<T> {}

export interface IHttpRequestConfig extends AxiosRequestConfig {}

export interface IHttpService {
  get: <T = any, R = IHttpResponse<T>>(url: string, config?: IHttpRequestConfig) => Promise<R>;
  delete: <T = any, R = IHttpResponse<T>>(url: string, config?: IHttpRequestConfig) => Promise<R>;
  post: <T = any, R = IHttpResponse<T>>(url: string, data?: any, config?: IHttpRequestConfig) => Promise<R>;
  put: <T = any, R = IHttpResponse<T>>(url: string, data?: any, config?: IHttpRequestConfig) => Promise<R>;
  patch: <T = any, R = IHttpResponse<T>>(url: string, data?: any, config?: IHttpRequestConfig) => Promise<R>;
}

const HttpService = (axiosStatic: AxiosStatic): IHttpService => {
  const client = axiosStatic.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const service: IHttpService = {
    get: client.get,
    post: client.post,
    put: client.put,
    delete: client.delete,
    patch: client.patch,
  };

  return service;
};

export const httpService = HttpService(axios);
