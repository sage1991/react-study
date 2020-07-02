import qs from "qs";
import { AxiosInstance, AxiosResponse } from "axios";
import { Converter } from "../common/types/function/Converter";
import { ResponseBuilder } from "./model/Response";


interface RequestConfig {
  headers?: any;
  payload?: any;
}

const defaultRequestConfig: RequestConfig = {
  headers: {},
  payload: null
}


class HttpClient {

  private instance: AxiosInstance;
  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }


  async get<T>(url: string, requestConfig = defaultRequestConfig, converter?: Converter<T>) {
    const { headers, payload } = requestConfig;
    const response = await this.instance.get(payload ? `${url}?${qs.stringify(payload)}` : url, { headers: headers });
    return this.convertResponse(response, converter);
  }


  async post<T>(url: string, requestConfig = defaultRequestConfig, converter?: Converter<T>) {
    const { headers, payload } = requestConfig;
    const response = await this.instance.post(url, { headers: headers, data: this.convertPayload(headers, payload) });
    return this.convertResponse(response, converter);
  }


  async put<T>(url: string, requestConfig = defaultRequestConfig, converter?: Converter<T>) {
    const { headers, payload } = requestConfig;
    const response = await this.instance.put(url, { headers: headers, data: this.convertPayload(headers, payload) });
    return this.convertResponse(response, converter);
  }


  async delete<T>(url: string, requestConfig = defaultRequestConfig, converter?: Converter<T>) {
    const { headers, payload } = requestConfig;
    const response = await this.instance.delete(url, { headers: headers, data: this.convertPayload(headers, payload) });
    return this.convertResponse(response, converter);
  }


  addHeaders(headers: any) {
    for (const key in headers) {
      this.instance.defaults.headers[key] = headers[key];
    }
  }


  addHeader(key: string; value: string) {
    this.instance.defaults.headers[key] = value;
  }


  removeHeaders(headers: string[]) {
    for (const value of headers) {
      delete this.instance.defaults.headers[value];
    }
  }


  removeHeader(key: string) {
    delete this.instance.defaults.headers[key];
  }


  private convertResponse<T>(response: AxiosResponse<any>, converter?: Converter<T>) {
    return new ResponseBuilder<T>().status(response.status)
                                    .data(converter ? converter(response.data) : response.data)
                                    .build();
  }

  private convertPayload(headers: any, payload: any) {
    if (
      headers["Content-Type"] === "application/x-www-form-urlencoded" 
      || this.instance.defaults.headers["Content-Type"] === "application/x-www-form-urlencoded"
    ) {
      return qs.stringify(payload);
    } else {
      return payload;
    }
  }

}


export { HttpClient };