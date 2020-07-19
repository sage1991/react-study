import qs from "qs";
import { AxiosInstance, AxiosResponse } from "axios";
import { Converter } from "../types/function/Converter";
import { ResponseBuilder } from "./model/Response";
import { firebase } from "./Axios";
import { Request } from "./model/Request";


const defaultRequest = { headers: {}, payload: null };

class HttpClient {

  private instance: AxiosInstance;
  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }


  async get<R, T>(url: string, requestOrConverter?: Request<R> | Converter<T>, orConverter?: Converter<T>) {
    
    const { request, converter } = this.parseArguments(requestOrConverter, orConverter);
    const { headers, payload } = request ?? defaultRequest;
    
    const response = await this.instance.get(payload ? `${url}?${qs.stringify(payload)}` : url, { headers: headers });
    return this.convertResponse(response, converter);
  }


  async post<R, T>(url: string, requestOrConverter?: Request<R> | Converter<T>, orConverter?: Converter<T>) {

    const { request, converter } = this.parseArguments(requestOrConverter, orConverter);
    const { headers, payload } = request ?? defaultRequest;
    
    const response = await this.instance.post(url, { headers: headers, data: this.convertPayload(headers, payload) });
    return this.convertResponse(response, converter);
  }


  async put<R, T>(url: string, requestOrConverter?: Request<R> | Converter<T>, orConverter?: Converter<T>) {
    
    const { request, converter } = this.parseArguments(requestOrConverter, orConverter);
    const { headers, payload } = request ?? defaultRequest;
    
    const response = await this.instance.put(url, { headers: headers, data: this.convertPayload(headers, payload) });
    return this.convertResponse(response, converter);
  }


  async delete<R, T>(url: string, requestOrConverter?: Request<R> | Converter<T>, orConverter?: Converter<T>) {
    
    const { request, converter } = this.parseArguments(requestOrConverter, orConverter);
    const { headers, payload } = request ?? defaultRequest;
    
    const response = await this.instance.delete(url, { headers: headers, data: this.convertPayload(headers, payload) });
    return this.convertResponse(response, converter);
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


  private parseArguments<R, T>(requestOrConverter?: Request<R> | Converter<T>, orConverter?: Converter<T>) {
    
    let converter: Converter<T> | undefined;
    let request: Request<R> | undefined;
    
    if (orConverter) {
      converter = orConverter;
    }

    if (requestOrConverter) {
      if (typeof requestOrConverter === "function") {
        converter = requestOrConverter as Converter<T>;
      } else if (requestOrConverter instanceof Request) {
        request = requestOrConverter as Request<R>;
      }
    }

    return {
      request: request,
      converter: converter
    }
  }

  
  setHeaders(headers: any) {
    for (const key in headers) {
      this.instance.defaults.headers[key] = headers[key];
    }
  }

  setHeader(key: string, value: string) {
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
  
}

const firebaseClient = new HttpClient(firebase);

export { HttpClient, firebaseClient };