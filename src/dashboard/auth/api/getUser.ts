import { AxiosResponse } from 'axios';

import { axios } from '@/libs/axios';

import { AuthUser } from '../types';

export const getUser = (): Promise<AxiosResponse<AuthUser>> => {
  return axios.get('/users/me');
};
