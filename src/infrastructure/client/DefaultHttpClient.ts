import axios, { AxiosInstance } from "axios";
import { App } from "vue";
import VueAxios from "vue-axios";
import { environment } from "../../../environment";

export class DefaultHttpClient {
  public static vueInstance: App;

  public static addResponseBodyInterceptor(axios: AxiosInstance): void {
    axios.interceptors.response.use(
      (response) => response.data,
      (error) => Promise.reject(error)
    );
  }

  public static addCacheDisablingInterceptor(axios: AxiosInstance): void {
    axios.interceptors.request.use(
      (request) => {
        request.params = { ...request.params, timestamp: Date.now() };
        return request;
      },
      (error) => Promise.reject(error)
    );
  }

  public static addRequestWithCredentials(axios: AxiosInstance): void {
    axios.interceptors.request.use(
      (request) => {
        request.withCredentials = true;
        return request;
      },
      (error) => Promise.reject(error)
    );
  }

  private static createAxiosInstance(): AxiosInstance {
    const instance = axios.create({
      baseURL: environment.baseApiUrl,
      withCredentials: true,
    });

    this.addCacheDisablingInterceptor(instance);
    this.addRequestWithCredentials(instance);
    this.addResponseBodyInterceptor(instance);

    return instance;
  }

  public static async setInstance(app: App<Element>): Promise<AxiosInstance> {
    const instance = this.createAxiosInstance();

    DefaultHttpClient.vueInstance = app;
    DefaultHttpClient.vueInstance.use(VueAxios, axios);

    return instance;
  }
}
