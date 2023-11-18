import Axios, {
  AxiosError,
  AxiosHeaders,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

import { API_URL } from '@/config';
import storage from '@/utils/storage';

const addAuthorization = (
  config: AxiosRequestConfig,
  token: string
): AxiosRequestConfig => {
  const headers = config.headers as AxiosHeaders;
  if (headers.get('Authorization')) return config;

  headers.set('Authorization', `Bearer ${token}`);
  config.headers = headers;

  return config;
};

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const token = storage.getAccessToken();
  if (token) return addAuthorization(config, token);

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};
const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

type ResponseError = AxiosError & {
  response: { data: { error: string; message: string; statusCode: number } };
};

export type AxiosResponseError = AxiosError & {
  axiosMessage: string;
  message: string;
};

const onResponseError = async (
  error: ResponseError
): Promise<AxiosResponseError> => {
  const config = error.config as AxiosRequestConfig & { sent?: boolean };

  if (error?.response?.status === 401 && !config.sent) {
    config.sent = true;

    try {
      const refreshToken = storage.getRefreshToken();
      const response = await Axios.post(
        API_URL + '/auth/jwt/refresh',
        {},
        { headers: { ['Authorization']: `Bearer ${refreshToken}` } }
      );

      if (!response.data.accessToken) {
        storage.clearTokens();
      }

      storage.setTokens(response.data);
      return axios(addAuthorization(config, response.data.accessToken));
    } catch (error) {
      storage.clearTokens();
    }
  }

  return Promise.reject({
    ...error,
    axiosMessage: error.message,
    message: error.response?.data?.message || 'Ooops, something went wrong',
  });
};

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(
  onRequest as (
    value: InternalAxiosRequestConfig<any>
  ) => InternalAxiosRequestConfig<any>,
  onRequestError
);
axios.interceptors.response.use(onResponse, onResponseError);
