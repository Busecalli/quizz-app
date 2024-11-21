import { DefaultHttpClient } from "@/infrastructure/client/DefaultHttpClient";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { environment } from "../../../environment";
import { IApiService } from "@/infrastructure/api/IApiService";

export class ApiService implements IApiService {
  private static instance: AxiosInstance;

  constructor() {
    ApiService.instance = axios.create({
      baseURL: environment.baseApiUrl,
      withCredentials: true,
    });

    DefaultHttpClient.addCacheDisablingInterceptor(ApiService.instance);
  }

  get<T>(url: string): Promise<AxiosResponse<T>> {
    const response = ApiService.instance.get<T>(url);
    return response;
  }

  post<T>(url: string, data?: any): Promise<AxiosResponse<T>> {
    return ApiService.instance.post<T>(url, data);
  }

  put<T>(url: string, data?: any): Promise<AxiosResponse<T>> {
    const response = ApiService.instance.put<T>(url, data);
    return response;
  }

  delete<T>(url: string): Promise<AxiosResponse<T>> {
    const response = ApiService.instance.delete<T>(url);
    return response;
  }
}
