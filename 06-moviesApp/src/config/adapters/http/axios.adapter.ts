import axios, { type AxiosRequestConfig, type AxiosInstance } from "axios";
import { HttpAdapter } from "./http.adapter";

interface Options {
  baseURL: string;
  params: Record<string, string>;
}

export class AxiosAdapter implements HttpAdapter {
  private axiosInstance: AxiosInstance;

  constructor({ baseURL, params }: Options) {
    this.axiosInstance = axios.create({ baseURL, params });
  }

  async get<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
    try {
      const mergedOptions = {
        ...options,
        params: {
          ...this.axiosInstance.defaults.params,
          ...(options?.params || {})
        }
      };

      const { data } = await this.axiosInstance.get<T>(url, mergedOptions);
      return data;
    } catch {
      throw new Error(`Error fetching get: ${url}`);
    }
  }
}