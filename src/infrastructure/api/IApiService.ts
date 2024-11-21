import { AxiosResponse } from "axios";

export interface IApiService {
  get<T>(url: string): Promise<AxiosResponse<T>>;
  post<T>(url: string, data?: any): Promise<AxiosResponse<T>>;
  put<T>(url: string, data?: any): Promise<AxiosResponse<T>>;
  delete<T>(url: string): Promise<AxiosResponse<T>>;
}
